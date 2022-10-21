import { UserDisplayName } from "../utils/index.js";

import businessModel from '../models/business.js';

export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) } );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about', displayName: UserDisplayName(req)} );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req)} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayName(req)} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req)} );
};

export function displayBusinessPage(req, res, next) {
    const busModel = businessModel.find({});
    res.render('index', {title: 'Business', page: 'business-list', business: busModel, displayName: UserDisplayName(req)});
}

export function button(req, res, next) {
    res.render('index', {title: 'About Me', page: 'about', displayName: UserDisplayName(req)});
}

