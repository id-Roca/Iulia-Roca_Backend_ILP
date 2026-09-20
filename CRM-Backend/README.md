# CRM Learning Project

A full-stack Customer Relationship Management (CRM) web application designed for a small business. Built to practice end-to-end development, this project handles everything from user roles and sales pipelines to support tickets and simple notifications.

---

## 🎯 Goal
Build a practical, multi-user CRM system to strengthen full-stack development skills—from designing the relational database to crafting the client interface.

---

## ✨ Features

* **Multi-User & Role Management**: Supports different permissions for roles including **Admin**, **Team Lead**, **Sales**, and **Customer Service**.
* **Companies & Contacts**: Track customer organizations and their associated individual contacts (one-to-many relationship).
* **End-to-End Sales Pipeline**: 
  * Lead flow: **Offer → Order → Invoice → Delivery**
  * Support for **partial deliveries** on orders.
* **Customer Support & Ticketing**:
  * Tickets linked to a specific company, contact, or order.
  * Explicit tracking for **Created By** vs. **Assigned To** users.
* **In-App Notifications**: Lightweight alerts to notify users of ticket assignments and updates.
* **Dynamic Data Calculation**: Derived metrics (e.g., ticket counts, total sales values) are calculated on-the-fly rather than hardcoded in the database.

---

## 🛠 Tech Stack & Architecture

### High-Level Architecture

The project follows a decoupled client-server model. A single Express API serves the web interface today and will support an optional desktop client in the future without backend modifications.

[ Web Client ]

+---> [ Express REST API ] ---> [ Prisma ORM ] ---> [ PostgreSQL ]
[ Desktop Client ] /  (Planned)

### Planned Technologies
* **Frontend**: HTML, CSS, Tailwind CSS, JavaScript
* **Backend**: Node.js, Express (REST API)
* **Database & ORM**: PostgreSQL, Prisma ORM

---

## 🚫 Out of Scope
To keep the project focused on core CRM features, full Enterprise Resource Planning (ERP) capabilities are intentionally excluded:
* No warehouse stock or inventory management
* No HR or payroll systems

---

## 🔮 Future Improvements
* Desktop client interface built on top of the existing REST API.



## NICE TO HAVEs - look into sorting the companies by id
## MUST improve - error handling for posting new contacts for unexisting companies