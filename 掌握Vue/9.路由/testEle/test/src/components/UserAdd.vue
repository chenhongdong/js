<template>
  <el-form ref="form" :rules="rules" :model="ruleForm">
    <el-form-item label="用户名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
	<el-form-item>
		<el-button type="primary" @click="submit">提交</el-button>
	</el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
		flag: false,
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
			{ required: true, message: "请输入用户名", trigger: "blur" },
			{ min: 3, max: 5, message: '长度在3-5个字符', trigger: 'blur'}
		]
      }
    };
  },
  methods: {
	  submit() {
		  this.$refs.form.validate(valid => {
			  console.log('验证', valid);
			  if (valid) {	// 验证通过
			  	this.flag = true;
				this.$router.push('/user/list');
			  }
		  });
	  }
  },
  beforeRouteEnter(to, from, next) {
	  // 没有this
	  next(vm => {
		  console.log('vm', vm);
	  })
  },
  beforeRouteLeave(to, from, next) {
	  if (this.ruleForm.name && !this.flag) {
		  this.$confirm('确认关闭')
		  	.then(_ => {
			  next();
			})
			.catch(_ => {});  
	  } else {
		  next();
	  }
  }
};
</script>