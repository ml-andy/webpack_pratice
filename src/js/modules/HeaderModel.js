class HeaderModel {
    constructor() {
        console.log('HeaderModel constructor');
        this.wrp = $('.wrapper');
    }
    init(){
        console.log('this is Header init');
    }
}

module.exports = HeaderModel;