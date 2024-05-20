import React, { useState } from 'react';

interface Product {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}

const Bai5: React.FC = () => {
  const [productId, setProductId] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const product: Product = {
      productId,
      productName,
      price,
      quantity,
    };
    console.log('Submitted Product:', product);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Mã sản phẩm:
            <input
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Tên sản phẩm:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Giá:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Số lượng:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Bai5;
