import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../../constants/orderConstants';

export default function OrderListScreen(props) {
    // const sellerMode = props.match.path.indexOf('/seller') >= 0;
    // const orderList = useSelector((state) => state.orderList);
    // const { loading, error, orders } = orderList;
    // const orderDelete = useSelector((state) => state.orderDelete);
    // const {
    //     loading: loadingDelete,
    //     error: errorDelete,
    //     success: successDelete,
    // } = orderDelete;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    // useEffect(() => {
    //     // dispatch({ type: ORDER_DELETE_RESET });
    //     // dispatch(listOrders({ seller: sellerMode ? userInfo._id : '' }));
    // }, [dispatch, sellerMode, successDelete, userInfo._id]);
    // const deleteHandler = (order) => {
    //     if (window.confirm('Are you sure to delete?')) {
    //         dispatch(deleteOrder(order._id));
    //     }
    // };
    return (
        <div>
            <h1>Orders</h1>
            {/* {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : ( */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>DELIVERED</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {orders.map((order) => ( */}
                    <tr key="1">
                        <td>order name</td>
                        <td>21/06</td>
                        <td>800dt</td>

                        <td>
                            no
                        </td>
                        <td>
                            <button
                                type="button"
                                className="small"
                                onClick={() => {
                                    // props.history.push(`/order/${order._id}`);
                                }}
                            >
                                Details
                            </button>
                            <button
                                type="button"
                                className="small"
                            // onClick={() => deleteHandler(order)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr key="1">
                        <td>order name</td>
                        <td>21/06</td>
                        <td>800dt</td>

                        <td>
                            no
                        </td>
                        <td>
                            <button
                                type="button"
                                className="small"
                                onClick={() => {
                                    // props.history.push(`/order/${order._id}`);
                                }}
                            >
                                Details
                            </button>
                            <button
                                type="button"
                                className="small"
                            // onClick={() => deleteHandler(order)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>


                </tbody>
            </table>

        </div>
    );
}