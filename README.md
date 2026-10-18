# Project carpintería Manualidades el Arca 

## Purpose
To give a plattform for a easier promotion and expand the number of available clients for the local business of "Carpintería Manualidades el Arca"
The strongest points of the site will be:

- Have a catalog to show possible works the client can ask or where the administrator can modify the available products they have and the possible combinations they can create.

- Have a platform where the seller can check the full process of the sell, from the initial chat to get a full quote to the notification to the user when the process has been finished.
 
- Have a space for the client to personalize the product and narrow the alternatives the user can ask for their product.


### functional and not functional requirements

#### Functional
1. The system requires a login and be able to create a new account.
2. Recover account section.
3. Landing static page to show the user a brief presentation of the business and what can the user get.
4. Dynamic section where the user can browse and add products to their "wishlist" to ask for a further quote.
5. Quote personalization of the products, add quote details like 
 - number of elements
 - if each element has different details like colors, name or images
 - description of each element or of the whole quote. 
6. PDF generation of how much the quote would be, number of products, notes and delivery time. Needs the logo of the business.
7. A section where the user can send messages:
- Changes to the quote (add more elements, change colors, names or images, materials, closer delivery time)
8. Review section to let the user leave comments and images of the product they recieved.

9. Orders with more than 2 weeks without

#### No Functional
1. The technologies to develop this project are:
- NestJs for Backend
- React for front end
- PostgreSQL as the database
- S3 like techonology for image storage of the products


### Entities
- User: Refers to the user that can use the platform.
    - id
    - Email: varchar
    - Password: varchar
    - Name: varchar
    - Phone: varchar
    - created_at: timestamp
    - updated_at: timestamp

- restorePasswordToken
    - token: varchar
    - user_id: int
    - expires_at: timestamp
    - created_at: timestamp


- User_role
    - user_id: foreignkey(number)
    - role_id: foreignkey(number)

- roles (catalog)
    values:
        id: int
        name: varchar
    catalog:
        - Client: generates orders, adds descriptions and sends payments updates
        - Administrator: can modify the products catalog, remove elements
        - Seller: get client information for contact, update order status, generate quote for client.
        - tester: combination of all roles

- permissions (catalog)
    values:
            id: int
            name: varchar
    catalog:
        - crud available products: for administrators
        - generate order: for clients after adding products
        - manage orders: for sellers

- roles_permissions:
    - role_id: foreignkey(role)
    - permissions_id foreignkey(permissions)

- order
    - id : number
    - status : foreignkey( order status )
    - total_paid: int
    - final price: int
    - client_id: foreignkey(user)
    - review: varchar
    - seller_id: foreignkey(user)
    - estimated_delivery_date: timestamp
    - delivery_date: timestamp
    - notes: varchar
    - minimum_payment: int
    - can_share: bool

- order status (catalog)
    values:
        id: int
        name: varchar
    catalog:
    - draft
    - generated
    - quoted
    - accepted
    - in process 
    - pending change
    - cancelled
    - done
    - reviewed

- Payment status (catalog)
    values:
        id: int
        name: varchar
    catalog:
        - approved
        - rejected
        - pending to approve

- Payments
    - id: int
    - order_id: foreignkey(order)
    - amount: int
    - proof (image save in S3?): varchar
    - status: foreignkey(payment_status)

- product
    - name: varchar
    - dimensions: json
    - minimum quantity: int
    - description: varchar
    - base_price: int
    - active: bool

- product_material
    material_id: foreignkey(material)
    product_id: foreignkey(product)

- material (catalog)
    values:
        id: int
        name: varchar
    catalog:
        - mdf
        - pino
        - etc

- product tags
    - tag_id: foreignkey(product)
    - product_id: foreignkey(product)

- tags
    - name: varchar
    - active: boolean
    - created at: timestamp
    - updated at: timestamp

- order_item
    - order_id: foreignKey(order)
    - product_id: foreignKey(product)
    - id (maybe we can have multiple products but with different descriptions, colors or texts): int
    - description: varchar
    - image_reference (image in S3): varchar
    - customizations (search for an front end engine to design easily some products): color, size, pattern, etc.: JSON
    - unit_final_price: int
    - quantity: int
    
### Processes

#### User
1. Create user
2. Delete user
3. Update password and contact info
4. Login
5. Create work
6. Accept quote
6. Upload payment
7. Send review

#### Administrator
1. Create product
2. Deactivate product
3. Modify product

#### Seller
1. Generate quote
2. Accept payments
3. Update work status


### Screens

1. Login
2. Recover password
3. User information (form to update)
4. landing page
5. catalog section
    - for users: 
        - add / remove from sketch
    - for administrators:
        - deactivate products
        - add products
6. my works
    - for users:
        - see all works ongoing, statuses and details
    - for sellers:
        - generate quotes
        - approve payments
        - move status of a work
7. product customization
    - add quantity of a product
    - set pattern they want on the product
    - select material for the product
    - duplicate product to customize
8.

Pending of design.
- user: add in the nav bar a user icon with a dropdown as a dialog bubble to:
    - see the user basic information like username and number of works in progress, also a configuration button.
    - options to sign in or sign up in case the user login process hasn't been done.
- login: add a login section with a two section, on the left the name of the page "WoodCraft Workshop" with a small subtitle down like "we bring your house to live and your celebrations.unforgettable" and a image of a woodwork. On the right the login form with the username and the password, the login button and the option to go to the forgot password section.
- recover password step1: set the email form input and the send button to fire the recovery password mechanism.
- recover password step2: put the two fields to set the password and confirm password to finish the recovery password section.
- my works: add a page for the user where it's a list of the different orders he has, each element of the list must have:
    - image of the order
    - number of order
    - cost of the order (if has)
    - payed amount of the order
    - status of the order (draft, advance pending, on going, done, delivered)
 And a button to see the details of the order

- order detail: show the information of the my works section in the upper part and a list of all the products with the image, the reference image, the client description of what he wants, the quantity of how many objects an option to modify the order, to cancel the order and to put new comments on the whole order and a button to download the quote made by the seller.


### Use cases
1. Login 
    - auth error
    - auth succeded
    - back end down (error 500)
2. sign up
    case:
        - invalid email / password
        - email already registered
    rules:
        - password must be at least 10 characters
        - just one email can be on the system
3. recovery password:
    case:
        - no email in DB
        - send email, normal process
        - token expired
        - invalid token
        - invalid password format
        - update password
    rules:
        - only send email on accounts in the DB

4. administrator managing products:
    - add product:
        - form complete
        - form incomplete
        - form with errors:
            - image size exceeds 10MB
            - negative values in dimensions
            - negative values in quantity
            - negative values in base_price
    - remove product:
        - product removed
        - product is in order (adminsitrator only can deactivate)

5. user adding products to sketch order:
    - add item
    - increase item quantity
    - remove item
    - create order
    - filter products

6. Edit order:
    - add item image_reference
    - add item customizations
    - add order description
    - request for change
    - upload payment
    - cancel order

7. seller managing orders:
    - list orders pending
    - filter orders
    - approve payments
    - move state of order
        - one seller only can move from the quoted to the accepted if the minimum_payment has been reached.
    - cancel orders (must put a reason)

## States

### User






        