### Entities
- User: Refers to the user that can use the platform.
    - id: int
    - Email: varchar
    - Password: varchar
    - Name: varchar
    - Phone: varchar
    - created_at: timestamp
    - updated_at: timestamp

- restorePasswordToken
    - id: int
    - token: varchar
    - user_id: int
    - expires_at: timestamp
    - created_at: timestamp


- User_role
    - primary composited key (user_id,role_id)
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
    - composite_key: (role, permissions)
    - role_id: foreignkey(role)
    - permissions_id foreignkey(permissions)

- order
    - id : number
    - status : foreignkey( order_status )
    - total_paid: int
    - client_id: foreignkey(user)
    - review: varchar
    - seller_id: foreignkey(user)
    - can_share: bool
    - delivery_date: timestamp

- quote:
    - id: int
    - order_id: foreignKey(order)
    - final_price: int
    - estimated_delivery_date: timestamp
    - version: int
    - notes: varchar
    - minimum_payment: int

- order_status (catalog)
    values:
        id: int
        name: varchar
        is_visible: bool
    catalog:
    - draft
    - generated
    - quoted
    - accepted
    - in process 
    - pending change
    - old version
    - cancelled
    - done
    - reviewed

- Payment_status (catalog)
    values:
        id: int
        name: varchar
    catalog:
        - approved
        - rejected
        - pending to approve

- Payment
    - id: int
    - order_id: foreignkey(order)
    - amount: float
    - proof (image save in S3?): varchar
    - status: foreignkey(payment_status)
    - created_at: timestamp
    - reviewed_at: timestamp
    - reviewed_by: foreignkey(User)
    - rejection_reason: varchar(255)

- product
    - id: int
    - name: varchar
    - dimensions: json
    - minimum quantity: int
    - description: varchar
    - base_price: int
    - active: bool

- product_images
    - id: int
    - product_id: foreignKey(product)
    - storage_key: varchar(255) (for s3)
    - alt_text: varchar(255)
    - sort_order: int


- product_material
    - primary composited key (material_id,product_id)
    - material_id: foreignkey(material)
    - product_id: foreignkey(product)

- material (catalog)
    - values:
        - id: int
        - name: varchar
    - catalog:
        - mdf
        - pino
        - etc

- product_tags
    - primary composited key (tag_id, product_id)
    - tag_id: foreignkey(tag)
    - product_id: foreignkey(product)

- tags
    - id: int
    - name: varchar
    - active: boolean
    - created at: timestamp
    - updated at: timestamp

- quote_item
    - quote_id: foreignKey(quote)
    - product_id: foreignKey(product)
    - id: int
    - description: varchar
    - image_reference (image in S3): varchar
    - customizations (search for an front end engine to design easily some products): color, size, pattern, etc.: JSON
    - unit_final_price: int
    - quantity: int
    - material_id: foreignkey(material)
    - active: bool

- order_item_reference
    - id: int
    - storage_key: varchar(255) (for S3)
    - order_item_id: foreignKey(order_item)
    - note: varchar(255)
