import { useCurationShoppingList } from '@/hooks/apis/getShoppingList';

import List from '../Shared/Layout/List';
import ProductCard from '../Shopping/ProductCard';
import ProductLikeButton from '../Shopping/ProductLikeButton';

interface Props {
  query: string;
  display?: number;
  isPriority?: boolean;
  className?: string;
}

export default function CurationList({
  query,
  display = 6,
  isPriority,
  className,
}: Props) {
  const { data: productList } = useCurationShoppingList({ query, display });

  if (productList == null) return null;

  return (
    <List className={`grid grid-item grid-cols-3 ${className}`}>
      {productList.map((product, index) => (
        <List.Row
          key={product.productId + index}
          className='items-start shrink-0'
        >
          <ProductCard
            product={product}
            isPriority={isPriority}
            right={<ProductLikeButton product={product} />}
          />
        </List.Row>
      ))}
    </List>
  );
}
