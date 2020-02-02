drop table character_spells;
drop table class_spells;
drop table spells;
drop table class;
drop table schools;
drop table character_weapons;
drop table weapon_properties;
drop table properties;
drop table weapons;
drop table character_equipment;
drop table equipment;
drop table proficiencies;
drop table skills;
drop table Character_Modifers;
drop table saving_throws;
drop table modifiers;
drop table traits;
drop table characters;
drop table campaigns;
drop table users;



CREATE TABLE Users (
	user_id INT AUTO_INCREMENT,
    username TEXT NOT NULL,
    pass TEXT NOT NULL,
    salt TEXT NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE Campaigns(
    campaign_id INT AUTO_INCREMENT,
    campaign_name TEXT,
    dungeon_master INT,
    campaign_description TEXT,
    notes TEXT,
    PRIMARY KEY (campaign_id),
    FOREIGN KEY fk_master(dungeon_master)
    REFERENCES Users(user_id)
);

CREATE TABLE Characters(
    character_id INT AUTO_INCREMENT,
    campaign_id INT,
    user_id INT,
    name TEXT,
    class_id INT,
    lvl INT,
    background TEXT,
    alignment TEXT,
    exp INT,
    race TEXT,
    armour_class INT,
    initiative INT,
    speed INT,
    max_health INT,
    current_health INT,
    temp_health INT,
    hit_dice TEXT,
    death_success INT,
    death_failure INT,
    proficiency_bonus INT,
    platinum INT,
    gold INT,
    electrum INT,
    silver INT,
    copper INT,
    personality_traits TEXT,
    ideals TEXT,
    bonds TEXT,
    flaws TEXT,
    alive BOOLEAN,
    active BOOLEAN,
    PRIMARY KEY (character_id),
    FOREIGN KEY fk_username(user_id)
    REFERENCES Users(user_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_campaign(campaign_id)
    REFERENCES Campaigns(campaign_id)
);

CREATE TABLE Traits(
    character_id INT,
    age INT,
    height TEXT,
    weight DOUBLE,
    eye_color TEXT,
    skin_tone TEXT,
    hair_color TEXT,
    FOREIGN KEY fk_character_traits(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE
);

CREATE TABLE Modifiers(
    modifier_id INT AUTO_INCREMENT,
    modifier_name TEXT,
    modifier_description TEXT,
    PRIMARY KEY (modifier_id)
);

CREATE TABLE Saving_Throws(
    character_id INT,
    modifier_id INT,
    PRIMARY KEY(character_id, modifier_id),
    FOREIGN KEY fk_character_saving_throws(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_modifier_saving_throws(modifier_id)
    REFERENCES Modifiers(modifier_id)
    ON DELETE CASCADE
);

CREATE TABLE Character_Modifers(
    character_id INT,
    strength INT,
    dexterity INT,
    constitution INT,
    intelligence INT,
    wisdom INT,
    charisma INT,
    PRIMARY KEY (character_id),
    FOREIGN KEY fk_character_modifier(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE
);


CREATE TABLE Skills(
    skill_id INT AUTO_INCREMENT,
    skill_name TEXT,
    modifier_id INT,
    PRIMARY KEY (skill_id),
    FOREIGN KEY fk_modifier_skill(modifier_id)
    REFERENCES Modifiers(modifier_id)
);

CREATE TABLE Chararcter_Skill_Proficiencies(
    character_id INT,
    skill_id INT,
    PRIMARY KEY (character_id, skill_id),
    FOREIGN KEY fk_character_skill_prof(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_skill_character_prof(skill_id)
    REFERENCES Skills(skill_id)
    ON DELETE CASCADE
);



CREATE TABLE Equipment(
    equipment_id  INT AUTO_INCREMENT,
    item_name TEXT NOT NULL,
    description TEXT,
    cost_platinum INT,
    cost_gold INT,
    cost_electrum TINYINT,
    cost_silver TINYINT,
    cost_copper TINYINT,
    weight FLOAT,
    PRIMARY KEY (equipment_id)
);

CREATE TABLE Character_Equipment(
    character_id INT,
    equipment_id INT,
    PRIMARY KEY (character_id, equipment_id),
    FOREIGN KEY fk_character_equipment(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_equipment_character(equipment_id)
    REFERENCES Equipment(equipment_id)
    ON DELETE CASCADE
);

CREATE TABLE Weapons(
    weapon_id INT AUTO_INCREMENT,
    damage TEXT,
    min_range INT,
    max_range INT,
    PRIMARY KEY (weapon_id),
    FOREIGN KEY fk_weapon_equipment(weapon_id)
    REFERENCES Equipment(equipment_id)
    ON DELETE CASCADE
);

CREATE TABLE Chararcter_Weapon_Proficiencies(
    character_id INT,
    weapon_id INT,
    PRIMARY KEY (character_id, weapon_id),
    FOREIGN KEY fk_character_weapon_prof(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_weapon_character_prof(weapon_id)
    REFERENCES Weapons(Weapon_id)
    ON DELETE CASCADE
);

CREATE TABLE Properties(
    property_id INT AUTO_INCREMENT,
    property_name TEXT,
    property_description TEXT,
    PRIMARY KEY (property_id)
); 

CREATE TABLE Weapon_Properties(
    weapon_id INT,
    property_id INT,
    PRIMARY KEY(weapon_id, property_id),
    FOREIGN KEY fk_weapon_property(weapon_id)
    REFERENCES Weapons(weapon_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_property_weapon(property_id)
    REFERENCES Properties(property_id)
    ON DELETE CASCADE
);



CREATE TABLE Character_Weapons(
    character_id INT,
    weapon_id INT,
    proficient BOOLEAN,
    PRIMARY KEY(character_id, weapon_id),
    FOREIGN KEY fk_character_weapon(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_weapon_character(weapon_id)
    REFERENCES Weapons(weapon_id)
    ON DELETE CASCADE
);

CREATE TABLE Schools(
    school_id INT AUTO_INCREMENT,
    school_name TEXT,
    school_description TEXT,
    PRIMARY KEY (school_id)
);

CREATE TABLE Features(
	feature_id INT AUTO_INCREMENT,
	feature_name TEXT,
	feature_description TEXT,
	PRIMARY KEY (feature_id)
);

CREATE TABLE Dice(
	dice_id INT AUTO_INCREMENT,
	dice_name TEXT,
	dice_value INT,
	PRIMARY KEY (dice_id)
);

CREATE TABLE Class(
    class_id INT AUTO_INCREMENT,
    class_name TEXT,
	modifier_id INT,
	hit_dice_id INT,
    PRIMARY KEY (class_id),
	FOREIGN KEY fk_class_hitdice(hit_dice_id)
	REFERENCES Dice(dice_id)
);

CREATE TABLE Class_Features(
	class_id INT,
	feature_id INT,
	PRIMARY KEY (class_id, feature_id),
	FOREIGN KEY fk_class_feature(class_id)
	REFERENCES Class(class_id)
	ON DELETE CASCADE,
	FOREIGN KEY fk_feature_classes(feature_id)
	REFERENCES Features(feature_id)
	ON DELETE CASCADE
);

CREATE TABLE Class_Skill_Proficiencies(
	class_id INT,
	skill_id INT,
	PRIMARY KEY (class_id, skill_id),
	FOREIGN KEY fk_class_skills(class_id)
	REFERENCES Class(class_id)
	ON DELETE CASCADE,
	FOREIGN KEY fk_skill_classes(skill_id)
	REFERENCES Skills(skill_id)
	ON DELETE CASCADE
);

CREATE TABLE Class_Weapon_Proficiencies(
	class_id INT,
	weapon_id INT,
	PRIMARY KEY (class_id, weapon_id),
	FOREIGN KEY fk_class_weapons(class_id)
	REFERENCES Class(class_id)
	ON DELETE CASCADE,
	FOREIGN KEY fk_weapons_classes(weapon_id)
	REFERENCES Weapons(weapon_id)
	ON DELETE CASCADE
);

CREATE TABLE Spells(
    spell_id INT AUTO_INCREMENT,
    spell_name TEXT,
    spell_level INT,
    duration TEXT,
    casting_time TEXT,
    components TEXT,
    school_id INT,
    attack_save TEXT,
    damage_effect TEXT,
    damage TEXT,
    description TEXT,
    PRIMARY KEY (spell_id),
    FOREIGN KEY fk_spell_school(school_id)
    REFERENCES Schools(school_id)
);

CREATE TABLE ComponentTypes(
    component_type_id INT AUTO_INCREMENT,
    component_type_name TEXT,
    PRIMARY KEY (component_type_id),
);

CREATE TABLE Spell_ComponentTypes(
    spell_id INT,
    component_type_id INT,
    PRIMARY KEY (spell_id, component_type_id),
    FOREIGN KEY fk_spell_component_type(spell_id)
    REFERENCES Spells(spell_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_component_type_spells(component_type_id)
    REFERENCES ComponentTypes(component_type_id)
    ON DELETE CASCADE
);

CREATE TABLE Class_Spells(
    spell_id INT,
    class_id INT,
    PRIMARY KEY (spell_id, class_id),
    FOREIGN KEY fk_spell_class(spell_id)
    REFERENCES Spells(spell_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_class_spells(class_id)
    REFERENCES Class(class_id)
    ON DELETE CASCADE
);

CREATE TABLE Character_Spells(
    character_id INT,
    spell_id INT,
    PRIMARY KEY(character_id, spell_id),
    FOREIGN KEY fk_character_spells(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_spells_character(spell_id)
    REFERENCES Spells(spell_id)
    ON DELETE CASCADE
);

CREATE TABLE Tools(
    tool_id INT AUTO_INCREMENT,
    tool_name TEXT,
    tool_description TEXT,
    PRIMARY KEY(tool_id)
);
CREATE TABLE Class_Tool_Proficiencies(
	class_id INT,
	tool_id INT,
	PRIMARY KEY (class_id, tool_id),
	FOREIGN KEY fk_class_tools(class_id)
	REFERENCES Class(class_id)
	ON DELETE CASCADE,
	FOREIGN KEY fk_tool_classes(tool_id)
	REFERENCES Skills(tool_id)
	ON DELETE CASCADE
);

CREATE TABLE Chararcter_Weapon_Proficiencies(
    character_id INT,
    weapon_id INT,
    PRIMARY KEY (character_id, weapon_id),
    FOREIGN KEY fk_character_weapon_prof(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_weapon_character_prof(weapon_id)
    REFERENCES Weapons(Weapon_id)
    ON DELETE CASCADE
);

CREATE TABLE Character_Tool_Proficiencies(
    character_id INT,
    tool_id INT,
    PRIMARY KEY (character_id, tool_id),
    FOREIGN KEY fk_character_tool_prof(character_id)
    REFERENCES Characters(character_id)
    ON DELETE CASCADE,
    FOREIGN KEY fk_tool_character_prof(tool_id)
    REFERENCES Tools(tool_id)
	ON DELETE CASCADE
);

CREATE TABLE Backgrounds(
    background_id INT AUTO_INCREMENT,
	background_name TEXT,
    background_description TEXT,
	PRIMARY KEY (background_id)
);

CREATE TABLE Background_Features(
	background_id INT,
	feature_id INT,
	PRIMARY KEY (background_id, feature_id),
	FOREIGN KEY fk_background_features(background_id)
    REFERENCES Backgrounds(background_id)
	ON DELETE CASCADE,
	FOREIGN KEY fk_feature_backgrounds(feature_id)
    REFERENCES Features(feature_id)
	ON DELETE CASCADE
);