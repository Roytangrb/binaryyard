<template>
  <div>
    <h1>Contact Us</h1>
    <v-form ref="form" >
      <v-container grid-list-xl>
        <v-layout
          wrap
          justify-center
        >
          <v-flex xs12 md4>
            <!-- Input Fields -->
            <v-text-field
              v-model="model_name"
              placeholder="Your name: "
              :rules="rules_name"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="model_email"
              placeholder="example@example.com"
              :rules="rules_email"
              label="Email"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-textarea
              v-model="model_message"
              placeholder="Drop us a messge:"
              :counter="max"
              :rules="rules_message"
              label="Message"
              required
            ></v-textarea>
          </v-flex>
          <!-- Input Fields -->
          <!-- Submission -->
          <v-flex xs12>
            <div class="text-xs-center">
              <v-dialog
                v-model="dialog"
                width="500"
                :disabled="!valid"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    :color="valid? 'red lighten-2' : 'grey lighten-2'"
                    dark
                    v-on="on"
                  >
                    Send
                  </v-btn>
                </template>
          
                <v-card>
                  <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                  >
                    Privacy Policy
                  </v-card-title>
          
                  <v-card-text>{{ dialogText }}</v-card-text>
          
                  <v-divider></v-divider>
          
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="secondary"
                      flat
                      @click="back"
                    >
                      Back
                    </v-btn>
                    <v-btn
                      color="primary"
                      flat
                      @click="submit"
                      :disabled="submitted"
                    >
                      {{submitButtonText}}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-flex>
          <!-- Submission -->
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'enquiryMessage',
  data: () => ({
    valid: false,
    submitted: false,
    dialog: false,
    email_test: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name_test: /^(?!\s*$).+/,
    max: 300,
    model_name: '',
    model_email: '',
    model_message: '',
    submitButtonText: 'Send',
    dialogText: 'Privacy Policy'
  }),
  computed: {
    rules_name () {
      const rules = [v => !!v || 'Name is required']

      const rule = 
        v => this.name_test.test(v) || 
          'Name cannot be empty'

      rules.push(rule)

      return rules
    },

    rules_email () {
      const rules = [v => !!v || 'Email is required',]

      const rule =
        v => this.email_test.test(v) ||
          'Invalid Email Input'

      rules.push(rule)

      return rules
    },

    rules_message () {
      const rules = [v => !!v || 'Message is required',]

      const rule =
        v => (v || '').length <= this.max ||
          `A maximum of ${this.max} characters is allowed`

      rules.push(rule)

      return rules
    } 
  },

  watch: {
    model_name: 'validateField', 
    model_email: 'validateField',
    model_message: 'validateField',
    dialog: "changeDialogText",
    submitted: 'changeSubmittedStats'
  },

  methods: {
    validateField () {
      if (this.$refs.form.validate()){
        this.valid = true
      }
    },
    submit () { 
      //async callback
      this.submitted = true
    },
    back() {
      this.dialog = false
      if (this.submitted){
        this.reset()
      }
    },
    /* change dialog text after click outside dialog*/
    changeDialogText () {
      if (this.dialog === false){
        this.back()
      }
    },
    changeSubmittedStats () {
      if (this.submitted){
        this.dialogText = 'You message has been sent out successfully! Thanks for connecting!'
        this.submitButtonText = 'Sent Successfully!'
      } else {
        this.dialogText = 'Privacy Policy'
        this.submitButtonText = 'Send'
      }
    },
    reset () {
      this.$refs.form.reset()
      this.valid = false
      this.submitted = false 
    }
  }
}
</script>
