<script lang="ts" >
    import { basicAuth } from "../../FirebaseClient"

    let email: string = ""
    let password: string = ""

    async function authMethod1(){
        if( email==""|| password=="" ) {
            alert("L'email et le mot de passe ne doivent pas être vides")
            return
        }
        let params = {email, password}
        const authResult = await basicAuth(params)
        console.log(authResult)
        if(!authResult[0]){
            
        }
    }

</script>

<div class=" flex h-screen items-center justify-center text-center flex-col ">
  <h1 class=" text-2xl pb-10">Connectez vous</h1>
  <div class=" flex flex-col">
    <input bind:value={email} type="text" placeholder="Email" class=" text-center border-b border-gray-600 focus:outline-none" />
    <input bind:value={password} type="text" placeholder="Password" class=" text-center border-b border-gray-600 focus:outline-none" />
  </div>

  <div class=" flex justify-between gap-5" >
    <button on:click={authMethod1} class=" p-1 m-1 bg-blue-300 rounded-md text-white w-24" >Register</button>
    <button class=" p-1 m-1 bg-blue-300 rounded-md text-white w-24" >Login</button>
  </div>

  <div class=" flex justify-between gap-5 ">
    <button>
      <svg
        role="img"
        fill="#4285F4"
        class="  w-8 h-8"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><title>Google</title><path
          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
        /></svg
      >
    </button>
    <button>
      <svg
        role="img"
        fill="#1877F2"
        class="  w-8 h-8"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><title>Facebook</title><path
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        /></svg
      >
    </button>
  </div>
</div>
