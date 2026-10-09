# Project carpintería Manualidades el Arca 

## Purpose
To give a plattform for a easier promotion and expand the number of available clients for the local business of "Carpintería Manualidades el Arca"
The strongest points of the site will be:

- Have a catalog to show possible works the client can ask or where the administrator can modify the available products they have and the possible combinations they can create.

- Have a plattaform where the seller can check the full process of the sell, from the initial chat to get a full quote to the notification to the user when the process has been finished.
 
- Have a space for the client to personalize the product and narrow the alternatives the user can ask for their product.

### Requirements
1. The system requires a login and be able to create a new account.
2. Recover account section.
3. Landing static page to show the user a brief presentation of the business and what can the user get.
4. Dynamic section where the user can browse and add products to their "wishlist" to ask for a further quote.
5. Quote personalization of the products, add quote details like number of elements, if each element has different details like colors, name or images and description of each element or of the whole quote. 
6. PDF generation of how much the quote would be, number of products, notes and delivery time. Needs the logo of the business.
7. A section where the user can send messages:
- Changes to the quote (add more elements, change colors, names or images, materials, closer delivery time)
8. Review section to let the user leave comments and images of the product they recieved.



### Entities
- User: Refers to the user that can use the plattform.
    - id
    - Email
    - Password
    - Name
    - Phone number
    - roles

- roles (catalog)
    - Client: generates works, adds descriptions and sends payments updates
    - Administrator: can modify the products catalog, remove elements
    - Seller: get client information for contact, update work status, generate quote for client.

- modules (catalog)
    - crud available products: for administrators
    - generate work: for clients after adding products
    - manage works: for sellers

- Work
    - id 
    - status
    - payment status
    - quote price
    - client (user)

- Work status (catalog)
    - generated
    - quoted
    - in process
    - cancelled
    - done
    - reviewed

- Payment status (catalog)
    - pending
    - started ? 
    - cancelled
    - completed

- Payments
    - work id
    - amount
    - proof (image save in S3?)

- product
    - name
    - material type
    - material required 
    - minimum quantity
    - description

- work - product
    - work id
    - product id
    - work product id (maybe we can have multiple products but with different descriptions, colors or texts)
    - description
    - image reference (image in S3)
    - colors (search for an front end engine to design easily some products)
### Process
### Screens
