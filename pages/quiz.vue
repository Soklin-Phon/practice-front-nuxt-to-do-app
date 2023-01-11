<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="message" outlined clearable label="Add task" type="text">
            <template v-slot:prepend>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on">
                    mdi-help-circle-outline
                  </v-icon>
                </template>
                I'm a tooltip
              </v-tooltip>
            </template>
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <v-progress-circular v-if="loading" size="24" color="info" indeterminate></v-progress-circular>
                <img v-else width="24" height="24" src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" alt="">
              </v-fade-transition>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
            <v-list-item-group v-model="settings" multiple>
              <v-list-item>
                <template v-slot:default="{ active, }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active" color="primary"></v-checkbox>
                  </v-list-item-action>
            
                  <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            
              <v-list-item>
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active" color="primary"></v-checkbox>
                  </v-list-item-action>
            
                  <v-list-item-content>
                    <v-list-item-title>Sound</v-list-item-title>
                    <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            
              <v-list-item>
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active" color="primary"></v-checkbox>
                  </v-list-item-action>
            
                  <v-list-item-content>
                    <v-list-item-title>Video sounds</v-list-item-title>
                    <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            
              <v-list-item>
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active" color="primary"></v-checkbox>
                  </v-list-item-action>
            
                  <v-list-item-content>
                    <v-list-item-title>Invites</v-list-item-title>
                    <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    message: 'Hey!',
    loading: false,
    settings: [],
  }),

  methods: {
    clickMe() {
      this.loading = true
      this.message = 'Wait for it...'
    },
  },
}
</script>