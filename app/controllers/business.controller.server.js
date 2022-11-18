import businessModel from '../models/business.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayBusinessList (req, res, next) {
    console.log("HERE!!!!!")

    businessModel.find(function(err, businessCollection) {
        console.log(businessCollection)
        if(err) {
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Business List', page: 'business/business-list', business: businessCollection, displayName: UserDisplayName(req)});

    })
}

export function DisplayBusinessAddPage(req, res, next) {
    res.render('index', {title: 'Add Business', page: 'business/edit', business: {}, displayName: UserDisplayName(req)});
}

export function ProcessBusinessAddPage(req, res, next) {
    let newBusiness = businessModel({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
        
    });

    businessModel.create(newBusiness, (err, Business) => {
        if(err) {
            console.error(err);
            res.end(err);
        };

        
        res.redirect('/business-list')
    })
}

export function DisplayBusinessEditPage(req, res, next) {
    let id = req.params.id;

    businessModel.findById(id, (err, business) => {
        if(err) {
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Edit Business', page:'business/edit', business: business, displayName: UserDisplayName(req)})
    });
}

export function ProcessBusinessEditPage(req, res, next) {
    let id = req.params.id;

    let newBusiness = businessModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    businessModel.updateOne({_id: id}, newBusiness, (err, Business) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/business-list')
    })
}

export function ProcessBusinessDelete(req, res, next) {
    let id = req.params.id;

    businessModel.remove({_id: id}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/business-list')
    })
}