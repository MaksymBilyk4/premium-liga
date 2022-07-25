const {Contact} = require("../models/models");
const {ApiError} = require("../error/ApiError");

class ContactsController {
    async create(req, res, next) {
        try {
            const {telephone, teamName, message} = req.body;
            const contact = await Contact.create({telephone, teamName, message});
            return res.json(contact);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getAll (req, res, next) {
        try {
            const contacts = await Contact.findAll();
            return res.json(contacts);
        }catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new ContactsController();