const StorageHub = require('watch-framework').StorageHub;
const data = require('../../resources/menu.json');
StorageHub.setJSON(data);
StorageHub.setData('hello', 'world')
StorageHub.setData('STEM', 0);
