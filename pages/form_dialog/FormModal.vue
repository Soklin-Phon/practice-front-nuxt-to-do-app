<template>
  <!-- @click:outside="close", if dialog's "persistent" prop isn't used,
   there's no need to handle outside click to close the dialog -->
  <v-dialog v-model="show" width="500px" persistent>
      <v-card class="py-4">
        <v-card-title>
          <span class="text-h5">Purchase amount</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      type="number"
                      label="Amount"
                      value="10.00"
                      v-model="amount"
                      prefix="$"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="close">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="makePurchase">
              Save
            </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>

// import {makePurchase} from '../../../service/purchase.service'

export default {
  
  props: {
    // The 'value' prop is the v-model of the component
    value:  Boolean,
    propPackage: {
      // type: Number,
      required: true,
      default: ''
    },
  },
  data: () => ({
    // Instead of trying to access the prop value on the data block
    // Set up a watcher for this prop, and do the value assignment there
    // selectPackage: this.propPackage,
    amount: '',
    id: '',
    result: false
  }),  
  watch: {
    propPackage(val) {
      // Be sure to validate default values
      // this.fetchData()
      console.log("log...");
      if(val !== '') {
        this.id = val
      }
    }
  },
  computed: {
    // Configuring a computed property like this,
    // you can close the dialog from the child component
    // and avoid the mutation prop warning
    show: {
        get() {
          return this.value
        },
        set(value) {
          var me = this
          me.$emit('input', value)
        }
    }
  },
  methods: {
    async makePurchase(){
                let data = {
                    amount: this.amount
                }
                // const result = await makePurchase(data, this.id);
                const result = true;

                if(result){
                  this.show = false
                  this.$emit('resResult', result)   
                }
            
            },
    close() {
      // It's okay to use $emit and set a @close event 
      // if you need to pass data to parent component
      //this.$emit("close", data);

      // But if not, with help of the computed property 'show' 
      // we can close the dialog from the child component
      // by just assign the value to false, since it's used
      // as the v-model of the component it also gets updated
      // on the parent component
      this.show = false
    },
  },
};
</script>