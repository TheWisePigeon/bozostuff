<script lang="ts" >
    import { browser } from "$app/environment";
    import { onMount } from "svelte";  

    async function userIsAuthenticated() : Promise<Boolean> {
        return false
    }

    onMount( async ()=>{
        if(browser){
            if( !await userIsAuthenticated() ){
                window.location.href="/auth"
            }
        }
    })


</script>

