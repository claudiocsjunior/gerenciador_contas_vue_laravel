<template>
    <div class="bg-gradient-dark" style="height: 100vh; width: 100%">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                  <div class="col-lg-5 d-none d-lg-block background-register">

                  </div>
                  <div class="col-lg-7" style="height: 500px;">
                    <div v-if="!loading" class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Criar uma conta!</h1>
                      </div>
                      <div v-if="erros.verificacao" class="alert alert-danger" role="alert">
                        {{ erros.msg }}
                      </div>
                      <form @submit.prevent.stop="submit()" class="user">
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input v-model="form.nome" type="text"
                            class="form-control"
                            placeholder="Nome"
                            required>
                          </div>
                          <div class="col-sm-6">
                            <input  v-model="form.sobrenome" type="text"
                            class="form-control"
                            placeholder="Sobrenome"
                            required>
                          </div>
                        </div>
                        <div class="form-group">
                          <input v-model="form.email" type="email"
                          class="form-control"
                          placeholder="Email"
                          required>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input v-model="form.password"
                            type="password"
                            class="form-control"
                            placeholder="Senha"
                            required
                            >
                          </div>
                          <div class="col-sm-6">
                            <input v-model="form.c_password" type="password"
                            class="form-control"
                            placeholder="Confirmação de senha"
                            required>
                          </div>
                        </div>
                        <input type="submit"  class="btn btn-primary btn-user btn-block" value="Criar conta">
                      </form>
                      <hr>
                      <div class="text-center">
                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div class="text-center">
                        <a class="small" href="login.html">Already have an account? Login!</a>
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
    name: 'Sign',
    data: () => ({
        form: {
            nome: '',
            sobrenome: '',
            email: '',
            password: '',
            c_password: '',
            name: ''
        },
        erros: {
            verificacao: false,
            msg: ''
        },
        loading: false,
    }),
    methods: {
        ...mapActions('auth', ['ActionSign']),
        async submit(){
          try{
            this.setName();
            this.limparVerificacao();
            if(this.form.password != this.form.c_password){
                this.adicionarErro('Senhas não conferem!')
            }else{
              this.loading = true;
              this.erros = await this.ActionSign(this.form);
              this.loading = false;
              if(!this.erros.verificacao)
                this.$router.push({name: 'home'});
            }
          }catch(e){
            console.error(e.data);
          }
        },
        limparVerificacao(){
            this.erros.verificacao = false;
            this.erros.msg = '';
        },
        adicionarErro(msg){
            this.erros.verificacao = true;
            this.erros.msg = msg;
        },
        setName: function(){
          this.form.name = this.form.nome + ' ' + this.form.sobrenome;
        }
    },
}
</script>

<style>
.background-register{
    background-image: url("../assets/images/background_sign.jpg");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
}

.centralizar-v{
  text-align: center;
  vertical-align:middle;
  display:table-cell;
}

.centralizar-h{
  left: 50%; 
  position: absolute; 
  transform: translateX(-50%);
}
</style>