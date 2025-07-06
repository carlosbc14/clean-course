(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        getProduct( id: number ) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admin' ) {
            console.log('Enviando correo', template);
        }

    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }

        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }

        notifyClients() {
            this.mailer.sendEmail(['user@mail'], 'to-clients');
        }

    }

    class CartBloc {

        addToCart( productId: number ) {
            console.log('Agregando al carrito de compras ', productId );
        }

        removeFromCart( productId: number ) {
            console.log('Removiendo del carrito de compras ', productId );
        }

        getCart() {
            console.log('Obteniendo el carrito de compras');
        }

    }


    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc( productService, mailer );
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

})();
