<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';
import { ProfileState, User } from '../store/profile/interface';
const namespace: string = 'profile';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @State('profile') private profile!: ProfileState;
  @Action('fetchData', { namespace }) private fetchData: any;
  @Getter('fullName', { namespace }) private fullName!: string;

  private async mounted() {
    console.log(this.profile);
    await this.fetchData();
    console.log(this.profile);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
