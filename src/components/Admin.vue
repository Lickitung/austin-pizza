<template>
    <div>
        <section v-if="currentUser">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <ap-new-pizza></ap-new-pizza>
                </div>
                <div class="col-sm-12 col-md-6">
                    <h3>Menu: </h3>
                    <table class="table table-hover">
                        <thead class="thead-default">
                            <tr>
                                <th>Item</th>
                                <th>Remove from menu</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in getMenuItems" :key=item.size>
                            <tr>
                                <td>{{item.name}}</td>
                                <td><button class="btn btn-outline-danger btn-sm"
                                    @click="removeMenuItem(item['.key'])">x</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <h3>Current orders: {{numberOfOrders}}</h3>
                    <table class="table table-hover" v-for="(orders, index) in getOrders" :key="orders.name">
                        <thead class="thead-default">
                            <tr>
                                <th>Item</th>
                                <th>Size</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            <div class="order-number">
                                <strong><em>Order Number: {{ index + 1 }}</em></strong>
                                <button class="btn btn-outline-danger btn-sm" @click="removeOrderItem(orders['.key'])">x</button>
                            </div>

                            
                            
                            <tr v-for="orderItems in orders" :key="orderItems.name">
                                <td>{{orderItems.name}}</td>
                                <td>{{orderItems.size}}</td>
                                <td>{{orderItems.quantity}}</td>
                                <td>{{orderItems.price | currency}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <hr>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <ap-login/>
            </div>
        </div>
    </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
import Login from './Login.vue'
import { mapGetters } from 'vuex'
import { dbMenuRef, dbOrdersRef } from '../firebaseConfig';

export default {
    components: {
        apNewPizza: NewPizza,
        apLogin: Login
    },
    computed: {
        ...mapGetters ([
            'numberOfOrders',
            'getMenuItems',
            'getOrders',
            'currentUser'
        ])
    },
    methods: {
        removeMenuItem(key) {
            dbMenuRef.child(key).remove()
        },
        removeOrderItem(key) {
            dbOrdersRef.child(key).remove()
        }
    }
}
</script>

<style scoped>
    .order-number {
        margin: 10px 0
    }
</style>