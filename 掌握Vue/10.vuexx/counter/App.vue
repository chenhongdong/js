<template>
    <div>
        {{this.$store.state.count}}
        <aa></aa>
        <bb></bb>
    </div>
</template>

<script>
import A from './components/A';
import B from './components/B';

export default {
    components: {
        'aa': A,
        'bb': B
    },
}
</script>