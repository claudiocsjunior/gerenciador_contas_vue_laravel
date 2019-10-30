<template>
    <div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block background-register">
             
          </div>
          <div class="col-lg-7">
            <div class="p-5">
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
                    <input v-model="form.senha" 
                    type="password" 
                    class="form-control"
                    placeholder="Senha"
                    required
                    >
                  </div>
                  <div class="col-sm-6">
                    <input v-model="form.confSenha" type="password" 
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
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
    name: 'Sign',
    data: () => ({
        form: {
            nome: '',
            sobrenome: '',
            email: '',
            senha: '',
            confSenha: '',
        },
        erros: {
            verificacao: false,
            msg: ''
        }
    }),
    methods: {
        submit(){
            this.limparVerificacao();
            if(this.form.senha != this.form.confSenha){
                this.adicionarErro('Senhas não conferem!')
            }else{
                console.log(this.form);
            }
        },
        limparVerificacao(){
            this.erros.verificacao = false;
            this.erros.msg = '';
        },
        adicionarErro(msg){
            this.erros.verificacao = true;
            this.erros.msg = msg;
        }
    }
}
</script>

<style>
.background-register{
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEq3ECYUPDFObHTvqGnt-uVcTJLdh_jbYqIQe0KwGxWGkszKos");
    background-position: left; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
}
</style>