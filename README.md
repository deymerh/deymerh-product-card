## deymerh-product-card

Este es un paquete de pruebas de despliegue en NPM.

### Deymer Hernández - @deymerh

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/';
```


```
<ProductCard
    product={product}
    className='bg-dark'
    initialValues={{
        count: 5,
        maxCount: 10
    }}
    >
    {
        ({count, isMaxCountReached, reset, increaseBy})=>(
            <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            </>
        )
    }
</ProductCard>
```