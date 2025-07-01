type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) {}

    isProductReady(): boolean {

        for ( const key in this ) {
            switch ( typeof this[key] ) {
                case 'string':
                    if ( this[key].length <= 0 ) throw new Error(`Product ${key} is empty`);
                    break;
                case 'number':
                    if ( this[key] <= 0 ) throw new Error(`Product ${key} is zero`);
                    break;
                default:
                    throw new Error(`Product ${key} is not valid`);
            }
        }

        return true;
    }

    toString() {

        // No DRY
        /*
         * if (this.name.length <= 0) throw new Error('Product name is empty');
         * if (this.price <= 0) throw new Error('Product price is zero');
         * if (this.size.length <= 0) throw new Error('Product size is empty');
         */

        // DRY
        if ( !this.isProductReady() ) return;

        return `Product: ${this.name}`;
    }
}

(() => {

    const bluePants = new Product('Blue Pants', 10, 'M');
    console.log(bluePants);

})();
