'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => A gente não USA JavaScript no lado do cliente
// Client Components => O JavaScript é enviado ao navegador (cliente)

// Streaming SSR => Ler/escrever dados de forma parcial + Server-side Rendering

// Renderizar um componente pelo lado do servidor de forma PARCIAL

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  console.log(params)

  function addToCart() {
    console.log('Adicionou ao carrinho')
  }

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  )
}