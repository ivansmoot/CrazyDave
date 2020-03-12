<template>
  <div id='kanban'>
    <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
    <div style="text-align: center">
      <el-transfer
        style="text-align: left; display: inline-block"
        v-model="value"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }"
        @change="handleChange"
        :data="data">
        <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
      </el-transfer>
    </div>
  </div>
</template>

<style scoped>
.transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
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
      data.push({
        key: 1,
        label: '这是第一个'
      })
      return data
    }
    return {
      data: generateData(),
      value: [1],
      value4: [1],
      renderFunc (h, option) {
        return <span>{ option.key } - { option.label }</span>
      }
    }
  },
  methods: {
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    }
  }
}
</script>
