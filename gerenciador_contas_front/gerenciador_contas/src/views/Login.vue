<template>
    <div class="bg-gradient-dark" style="height: 100vh; width: 100%">
        <div class="container" >

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0" >
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block background-login"></div>
                            <div class="col-lg-6">
                                <div v-if="!loading" class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Bem Vindo de volta!</h1>
                                    </div>
                                    <form @submit.prevent.stop="submit()" class="user">
                                        <div class="form-group">
                                            <input v-model="form.email"
                                                   type="email"
                                                   class="form-control form-control-user"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Email"
                                                   required>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="form.password"
                                                   type="password"
                                                   class="form-control form-control-user"
                                                   placeholder="Senha"
                                                   required>
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Lembrar-me</label>
                                            </div>
                                        </div>
                                        <input type="submit" class="btn btn-primary btn-user btn-block" value="Login">

                                        <hr>
                                    </form>
                                    <br>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Esqueci minha senha</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="register.html">Criar uma conta</a>
                                    </div>
                                </div>
                                <div v-else class="mx-auto loading" style="height: 470px;"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'Login',
    data: () => ({
        form: {
            email: '',
            password: ''
        },
        loading: false,
    }),
    methods: {
        ...mapActions('auth', ['ActionLogin']),
        async submit(){
            try {
                await this.ActionLogin(this.form);
            }catch (e) {
                console.log(e);
            }
        }

    }

}
</script>

<style>
.background-login{
    background-image: url("../assets/images/background_login.jpg");
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>