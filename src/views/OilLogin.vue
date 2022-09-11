<template>
  <div>
    <h2>Oil</h2>
    <div id="loginForm">
        <form @submit.prevent = "fnLogin">
            <p>
                <input name="uid" placeholder="ID를 입력하세요" v-model="user_id">
            </p>
            <p>
                <input name="password" placeholder="********" v-model="user_pw" type="password">
            </p>
            <p>
                <button type="submit">Login</button>
            </p>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            user_id:'',
            user_pw:''
        }
    },
    methods:{
        fnLogin(){
            if(this.user_id === ''){
                alert('아이디를 입력하세요');
                return;
            }
            if(this.user_pw === ''){
                alert('비밀번호를 입력하세요');
                return;
            }
            alert('로그인 되었습니다');
        }
    }
}
</script>

<style>

</style>