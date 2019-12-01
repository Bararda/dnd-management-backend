CREATE TABLE users (
    user_id INT AUTO_INCREMENT,
    username TEXT not null,
);

CREATE TABLE items (
    item_id int AUTO_INCREMENT,
    item_name TEXT NOT NULL,
    item_description TEXT,
    quantity DOUBLE,
    weight DOUBLE,
    bag_id INT REFERENCES bags(bag_id),
);

CREATE TABLE bags (
    bag_id INT AUTO_INCREMENT,
    bag_name TEXT NOT NULL,
    bag_description TEXT,
    weight_limit DOUBLE,
    len DOUBLE,
    width DOUBLE,
    height DOUBLE,
    owner_id INT REFERENCES users(user_id)
    
);


CREATE TABLE item_tags (
  item_id   
);

CREATE TABLE tags (
    tag_id INT AUTO_INCREMENT,
    tag_name TEXT NOT NULL,
    tag_description TEXT,
    PRIMARY KEY (skill_id),

)




CREATE TABLE Skills(
    skill_id INT AUTO_INCREMENT,
    skill_name VARCHAR(100),
    modifier_id INT,
    PRIMARY KEY (skill_id),
    FOREIGN KEY fk_modifier_skill(modifier_id)
    REFERENCES Modifiers(modifier_id)
);