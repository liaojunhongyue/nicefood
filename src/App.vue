<template>
  <div id="app">
  	<transition :name="transitionName">
    	<router-view class="child-view"></router-view>
    </transition>
    <f-footer v-if="foodStyle"></f-footer>
  </div>
</template>

<script>
import fFooter from './components/common/footer.vue'

export default {
  name: 'App',
  data() {
  	return {
  		transitionName: 'slide-left',
      foodStyle: true
  	}
  },
  created() {
    let currentRoute = this.$route.path;
    let currentMainRoute = currentRoute.split('/');
    if( currentRoute == '/' ||
        currentRoute == '/challenge' ||
        currentRoute == '/user' ||
        currentMainRoute.indexOf('find') != -1 ) 
    {
      this.foodStyle = true;
    }else{
      this.foodStyle = false;
    }
  },
  watch: {
  	'$route' (to, from) {
      // 监控footer是否出现
      let currentRoute = to.path;
      let currentMainRoute = to.path.split('/');
  		if( to.path == '/' ||
          to.path == '/challenge' ||
          to.path == '/user' ||
          currentMainRoute.indexOf('find') != -1
        ) 
      {
  			this.transitionName = 'slide-right';
  		}else{
  			this.transitionName = 'slide-left';
  		}
      
      if( currentRoute == '/' ||
          currentRoute == '/challenge' ||
          currentRoute == '/user' ||
          currentMainRoute.indexOf('find') != -1 ) 
      {
        this.foodStyle = true;
      }else{
        this.foodStyle = false;
      }
  	}
  },
  components: { 
    'f-footer': fFooter
  }
}
</script>



