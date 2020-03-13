<template>
  <div id='kanban'>
    <p style="text-align: center; margin: 0 0 20px; height: 50px">简单的KanBan</p>
    <div style="text-align: center">
      <el-transfer
        style="text-align: left; display: inline-block; height: 500px;"
        v-model="value"
        filterable
        target-order="unshift"
        :render-content="renderFunc"
        :titles="['BugList', '待测试']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }"
        @change="handleChange"
        :data="data">
        <!-- <el-button class="transfer-footer" slot="left-footer" style="width: 50px">+</el-button> -->
        <el-popover
          placement="top"
          width="160"
          v-model="visible"
          cclass="transfer-footer"
          slot="left-footer">

          <div style="margin: 20px 0;"></div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>

          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="pushdata">确定</el-button>
          </div>
          <el-button slot="reference">+</el-button>
        </el-popover>
        <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
      </el-transfer>
    </div>
  </div>
</template>

<style>
.transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }

.el-transfer-panel {
    width: 300px;
}

.el-transfer-panel__body {
    height: 400px;
}

.el-transfer-panel__list.is-filterable{
    height: 328px;
}
</style>

<script>
export default {
  name: 'kanban',
  data () {
    const generateData = _ => {
      const data = []
      // for (let i = 1; i <= 15; i++) {
      //   data.push({
      //     key: i,
      //     label: `备选项 ${i}`,
      //     disabled: i % 4 === 0
      //   })
      // }
      return data
    }
    return {
      data: generateData(),
      value: [0],
      renderFunc (h, option) {
        return <span>{ option.key } - { option.label }</span>
      },
      visible: false,
      textarea: '',
      keynum: 1
    }
  },
  methods: {
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    },
    pushdata () {
      this.visible = false
      this.data.push({
        key: this.keynum++,
        label: this.textarea
      })
      this.textarea = null
    }
  }
}
</script>
