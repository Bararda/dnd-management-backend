DROP DATABASE InventoryManager;
CREATE DATABASE InventoryManager;
USE InventoryManager;
CREATE TABLE roles (
    role_id INT AUTO_INCREMENT,
    role_name TEXT NOT NULL,
    PRIMARY KEY (role_id)
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT,
    username TEXT not null,
    password TEXT not null,
    role_id int NOT NULL,
    PRIMARY KEY (user_id),
    FOREIGN KEY fk_users_roles(role_id) REFERENCES roles(role_id)
);

CREATE TABLE bags (
    bag_id INT AUTO_INCREMENT,
    bag_name TEXT NOT NULL,
    bag_description TEXT,
    weight_limit DOUBLE,
    len DOUBLE,
    width DOUBLE,
    height DOUBLE,
    PRIMARY KEY (bag_id),
    owner_id INT REFERENCES users(user_id)
);

CREATE TABLE items (
    item_id int AUTO_INCREMENT,
    item_name TEXT NOT NULL,
    item_description TEXT,
    quantity DOUBLE,
    weight DOUBLE,
    bag_id INT REFERENCES bags(bag_id),
    PRIMARY KEY (item_id)
);

CREATE TABLE tags (
    tag_id INT AUTO_INCREMENT,
    tag_name TEXT NOT NULL,
    tag_description TEXT,
    PRIMARY KEY (tag_id)
);

CREATE TABLE item_tags (
    item_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY (item_id) REFERENCES items(item_id),
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id),
    PRIMARY KEY (item_id, tag_id)
);


CREATE TABLE bag_tags (
    bag_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY (bag_id) REFERENCES bags(bag_id),
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id),
    PRIMARY KEY (bag_id, tag_id)
);
