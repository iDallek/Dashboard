import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

const LastOrders = () => {
  // generate fake data for last orders table
  const [lastOrders, setLastOrders] = useState(
    Array.from({ length: 10 }, () => ({
      orderId: faker.datatype.number({ min: 10000000, max: 10999999 }),
      orderDate: faker.datatype.number({ min: 20200000, max: 20221231 }),
      totalPrice: faker.commerce.price(100, 1000),
      buyer: faker.name.findName(),
      status: faker.helpers.arrayElement([
        [`Pronto para embalar`, `Marcar como embalado`],
        [`Pronto para envio`, `Notificar envio`],
      ]),
    })),
  );

  const makeTable = () => (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-100 text-gray-600">
        <tr>
          <th scope="col" className="px-6 py-3">
            Pedido
          </th>
          <th scope="col" className="px-6 py-3">
            Data e Horário
          </th>
          <th scope="col" className="px-6 py-3">
            Produtos
          </th>
          <th scope="col" className="px-6 py-3">
            Total
          </th>
          <th scope="col" className="px-6 py-3">
            Comprador
          </th>
          <th scope="col" className="px-6 py-3">
            Status do Pedido
          </th>
          <th scope="col" className="px-6 py-3">
            Ação Recomendada
          </th>
        </tr>
      </thead>
      <tbody>
        {lastOrders.map((order, index) => (
          <tr
            key={index}
            className={
              index % 2 === 0
                ? `bg-white border-b border-gray-100`
                : `bg-gray-50 border-b border-gray-100`
            }
          >
            <td className="px-6 py-4">{order.orderId}</td>
            <td className="px-6 py-4">{order.orderDate}</td>
            <td className="px-6 py-4">
              <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Ver quantidade
              </span>
            </td>
            <td className="px-6 py-4">R$ {order.totalPrice}</td>
            <td className="px-6 py-4">{order.buyer}</td>
            <td className="px-6 py-4">{order.status[0]}</td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {order.status[1]}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="m-6 font-medium text-2xl text-gray-700">
          Últimos pedidos realizados
        </div>
        {makeTable()}
      </div>
    </div>
  );
};

export default LastOrders;
