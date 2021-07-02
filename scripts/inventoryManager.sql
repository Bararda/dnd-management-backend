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

CREATE TABLE schools(
    school_id INT AUTO_INCREMENT,
    school_name TEXT,
    school_description TEXT,
    PRIMARY KEY (school_id)
);

CREATE TABLE classes(
    class_id INT AUTO_INCREMENT,
    class_name TEXT,
    class_description TEXT,
	hit_dice TEXT,
    PRIMARY KEY (class_id)
);
ALTER TABLE spells
ADD higher_level TEXT; 
ALTER TABLE spells AUTO_INCREMENT = 1;
CREATE TABLE spells(
    spell_id INT AUTO_INCREMENT,
    spell_name TEXT,
    spell_level INT,
    duration TEXT,
    casting_time TEXT,
    components TEXT,
    school_id INT,
    damage TEXT,
    description TEXT,
    spell_range TEXT,
    higher_level TEXT,
    concentration BOOLEAN,
    ritual BOOLEAN,
    PRIMARY KEY (spell_id),
    FOREIGN KEY fk_spell_school(school_id)
    REFERENCES schools(school_id)
);

CREATE TABLE class_spells(
    spell_id INT,
    class_id INT,
    PRIMARY KEY (spell_id, class_id),
    FOREIGN KEY fk_spell_class(spell_id)
    REFERENCES spells(spell_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_class_spells(class_id)
    REFERENCES classes(class_id)
    ON DELETE CASCADE
);

CREATE TABLE componenttypes(
    component_type_id INT AUTO_INCREMENT,
    component_type_name TEXT,
    PRIMARY KEY (component_type_id)
);

CREATE TABLE spell_componenttypes(
    spell_id INT,
    component_type_id INT,
    PRIMARY KEY (spell_id, component_type_id),
    FOREIGN KEY fk_spell_component_type(spell_id)
    REFERENCES spells(spell_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_component_type_spells(component_type_id)
    REFERENCES componenttypes(component_type_id)
    ON DELETE CASCADE
);

CREATE TABLE damagetypes(
    damage_type_id INT AUTO_INCREMENT,
    damage_type_name TEXT,
    PRIMARY KEY (damage_type_id)
);

CREATE TABLE spell_damagetypes(
    spell_id INT,
    damage_type_id INT,
    PRIMARY KEY (spell_id, damage_type_id),
    FOREIGN KEY fk_spell_damagetype(spell_id)
    REFERENCES spells(spell_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_damagetype_spells(damage_type_id)
    REFERENCES damagetypes(damage_type_id)
    ON DELETE CASCADE
);

CREATE TABLE `spell_books` (
  `spell_book_id` INT AUTO_INCREMENT,
  `spell_book_name` TEXT NOT NULL,
  `spell_book_description` TEXT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`spell_book_id`),
  INDEX `fk_spellbook_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_spellbook_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

CREATE TABLE `spell_book_spells` (
  `spell_book_id` INT NOT NULL,
  `spell_id` INT NOT NULL,
  PRIMARY KEY (`spell_book_id`, `spell_id`),
  INDEX `fk_spell_spellbook_idx` (`spell_id` ASC),
  CONSTRAINT `fk_spell_spellbook`
    FOREIGN KEY (`spell_id`)
    REFERENCES `spells` (`spell_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_spellbook_spell`
    FOREIGN KEY (`spell_book_id`)
    REFERENCES `spell_books` (`spell_book_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

ALTER TABLE `bags` 
ADD INDEX `fk_bag_owner_idx` (`owner_id` ASC);
;
ALTER TABLE `bags` 
ADD CONSTRAINT `fk_bag_owner`
  FOREIGN KEY (`owner_id`)
  REFERENCES `users` (`user_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `items` 
ADD COLUMN `owner_id` INT NULL AFTER `bag_id`,
ADD INDEX `fk_item_bag_idx` (`bag_id` ASC),
ADD INDEX `fk_item_owner_idx` (`owner_id` ASC);
;
ALTER TABLE `items` 
ADD CONSTRAINT `fk_item_bag`
  FOREIGN KEY (`bag_id`)
  REFERENCES `bags` (`bag_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_item_owner`
  FOREIGN KEY (`owner_id`)
  REFERENCES `users` (`user_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

  ALTER TABLE `tags` 
ADD COLUMN `user_id` INT NULL AFTER `tag_description`,
ADD INDEX `fk_tag_user_idx` (`user_id` ASC);
;
ALTER TABLE `tags` 
ADD CONSTRAINT `fk_tag_user`
  FOREIGN KEY (`user_id`)
  REFERENCES `users` (`user_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
