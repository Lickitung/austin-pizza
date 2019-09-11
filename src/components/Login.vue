<template>
    <div class="row">
        <form action="">
            <div class="form-group">
                <label>Email address</label>
                <input type="text" class="form-control" id="email" v-model="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter password">
            </div>
            <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign in</button>
            <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign out</button>
        </form>
    </div>
</template>

<script>
import Firebase from 'firebase'

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signIn() {
                console.log('Signing in');
                Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    if (errorCode == 'auth/wrong-password') {
                        alert('Wrong password');
                    } else {
                        alert(errorMessage);
                    }
                })
            },
            signOut() {
                console.log('Signing out');
                Firebase.auth().signOut().then(function() {
                    alert('logged out');
                }).catch(function(error) {
                    alert('error.')
                })
            }
        }
    }
</script>

<style scoped>

</style>