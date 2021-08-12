<template>
  <div>
      <div>
        <form @submit.prevent="handleSubmit">
          <label for="Email">Email: </label>
          <input type="email" required v-model="email">

          <label for="Password">Password: </label>
          <input type="password" required v-model="password">
          <div v-if="passwordError" class="error">
            {{passwordError}}
          </div>

          <label>Role: </label>
          <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
          </select>

          <label>Skills: </label>
          <input type="text" v-model="tempSkills" @keyup.alt="addSkills">
          <div v-for="skill in skills" :key="skill" class="skillBox">
            <i @click="deleteSkills(skill)">{{skill}}</i>
          </div>

          <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept terms and Condition</label>
          </div>

          <div class="submitForm">
            <button>Create an Account</button>
          </div>

          <!-- <div>
            <input type="checkbox" value="gaurav" v-model="name">
            <label>Gaurav</label>
          </div>

          <div>
            <input type="checkbox" value="gkts" v-model="name">
            <label>GKTS</label>
          </div>

          <div>
            <input type="checkbox" value="kadam" v-model="name">
            <label>Kadam</label>
          </div> -->
        </form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'designer',
      terms: false,
      tempSkills: '',
      skills: [],
      passwordError: ''
      // name: []
    }
  },

  methods: {
    addSkills(e) {
      if (e.key === ',' && this.tempSkills) {
        if (!this.skills.includes(this.tempSkills)) {
          this.skills.push(this.tempSkills)
        }
        this.tempSkills = ''
      }
    },

    deleteSkills(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item
      })
    }, 

    handleSubmit() {
      // validate password
      this.passwordError = this.password.length > 8 ? '' : 'Password must be at least 8 characters'
      if (!this.passwordError) {
        console.log('email: ' , this.email)
        console.log('password: ' , this.password)
        console.log('role: ' , this.role)
        console.log('skills: ' , this.skills)
        console.log('terms accepted: ' , this.terms)
      }
    }
  }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }

  label {
    color: #aaa;
    display: inline-block;
    margin: 20px 0 15px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }

  .skillBox {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }

  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  }

  .submitForm {
    text-align: center;
  }

  .error {
    color: red;
    margin-top: 10px;
    font-size: 0.8rem;
    font-weight: bold;
  }
</style>