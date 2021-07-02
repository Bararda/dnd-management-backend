ALTER TABLE spells 
ADD user_id int null AFTER concentration;


ALTER TABLE spells
    ADD FOREIGN KEY
    fk_spell_user (user_id)
    REFERENCES users (user_id)
    ON DELETE SET NULL
    ON UPDATE NO ACTION;
