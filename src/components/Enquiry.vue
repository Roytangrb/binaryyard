<template>
  <v-form ref="form" >
    <v-container grid-list-xl>
      <v-layout
        wrap
        justify-space-between
      >
        <v-flex xs12 md4>
          <v-text-field
            v-model="model_name"
            placeholder="Your name: "
            :rules="rules_name"
            label="Name"
          ></v-text-field>
          <v-text-field
            v-model="model_email"
            placeholder="example@example.com"
            :rules="rules_email"
            label="Email"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md6>
          <v-text-field
            v-model="model_message"
            placeholder="Drop us a messge:"
            :counter="max"
            :rules="rules_message"
            label="Message"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'enquiryMessage',
  data: () => ({
    match_email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    match_name: /^(?!\s*$).+/,
    max: 300,
    model_name: '',
    model_email: '',
    model_message: ''
  }),
  computed: {
    rules_name () {
      const rules = []

      const rule = 
        v => v.match(this.match_name) || 
          'Name cannot be empty'
      
      rules.push(rule)

      return rules
    },

    rules_email () {
      const rules = []

      const rule =
        v => v.match(this.match_email) ||
          'Invalid Email Input'

      rules.push(rule)

      return rules
    },

    rules_message () {
      const rules = []

      const rule =
        v => (v || '').length <= this.max ||
          `A maximum of ${this.max} characters is allowed`

      rules.push(rule)

      return rules
    } 
  },

  watch: {
    match_name: 'validateField',
    match_email: 'validateField',
    max: 'validateField',
    model_email: 'validateField',
    model_message: 'validateField'
  },

  methods: {
    validateField () {
      this.$refs.form.validate()
    }
  }
}
</script>
