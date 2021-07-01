import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../../constants/orderConstants';

export default function OrderListScreen(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch]);
  const deleteHandler = (order) => {
    if (window.confirm('Voulez-vous continuer ?')) {
      dispatch(deleteOrder(order._id));
      dispatch(listOrders());
    }
  };
  return (
    <div className="card card-body">
      <h1>COMMANDES</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Client</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>METHODE DE PAIEMENT</th>
              <th>ETAT DE LA COMMANDE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orderList.orders.map((order) => (
              <tr key={order._id}>
                <td>{order.shippingAddress.fullName}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)} DT</td>
                <td>{order.payementMethod}</td>
                <td></td>
                <td>
                  <button
                    type="button"
                    className="primary small"
                    onClick={() => {
                      props.orderProps.history.push(`/orders/${order._id}`);
                    }}
                  >
                    Détailles
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                  >
                    Effacer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}