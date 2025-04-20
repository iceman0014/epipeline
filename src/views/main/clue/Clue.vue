<template>
  <div class="lead-tracking-container">
    <!-- 顶部Tab切换 -->
    <div class="tab-container">
      <a-tabs v-model:activeKey="activeTabKey" @change="handleTabChange">
        <a-tab-pane key="all" tab="全部"></a-tab-pane>
        <a-tab-pane key="current" tab="当年"></a-tab-pane>
        <a-tab-pane key="history" tab="历史"></a-tab-pane>
      </a-tabs>
    </div>

    <!-- 标题和搜索栏 -->
    <div class="header-container">
      <div class="title">
        <h1>线索申请</h1>
      </div>
      <div class="search-container">
        <a-input-search
          v-model:value="searchValue"
          placeholder="输入人员姓名/手机/电话"
          style="width: 300px"
          @search="onSearch"
        />
        <CreateLeadForm @lead-created="handleLeadCreated" />
        <!-- <a-button type="primary" class="action-button" @click="handleAddNew">
          <plus-outlined />
          新建线索
        </a-button> -->
        <a-button class="action-button" @click="handleCheckDuplicate"
          >查重</a-button
        >
        <a-button class="action-button">
          <ellipsis-outlined />
        </a-button>
      </div>
    </div>

    <!-- 高级检索 -->
    <div class="advanced-search">
      <div class="search-item">
        <span class="label">场景：</span>
        <a-select
          v-model:value="sceneValue"
          style="width: 150px"
          @change="handleSceneChange"
        >
          <a-select-option value="current">当年</a-select-option>
          <a-select-option value="other">其他场景</a-select-option>
        </a-select>
      </div>
      <div class="search-item">
        <span class="label">状态：</span>
        <a-select
          v-model:value="statusValue"
          style="width: 150px"
          @change="handleStatusChange"
        >
          <a-select-option value="normal">正常</a-select-option>
          <a-select-option value="closed">已关闭</a-select-option>
          <a-select-option value="pending">审批中</a-select-option>
        </a-select>
      </div>
      <a-button type="primary"><SwapOutlined /> 转移</a-button>
      <a-button type="primary" class="action-button"
        ><ExportOutlined /> 导出选中</a-button
      >
      <a-button type="primary" class="action-button"
        ><TransactionOutlined />转化为商机</a-button
      >
    </div>

    <!-- 数据表格 -->
    <div class="table-container">
      <a-table
        :dataSource="tableData"
        :columns="columns"
        :pagination="pagination"
        :rowSelection="rowSelection"
        :loading="loading"
        @change="handleTableChange"
      >
        <template #emptyText>
          <div class="empty-content">
            <div class="empty-text">暂无数据</div>
            <a-button type="primary" @click="handleAddNew">
              <plus-outlined />
              新建线索
            </a-button>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  PlusOutlined,
  EllipsisOutlined,
  SwapOutlined,
  ExportOutlined,
  TransactionOutlined,
} from '@ant-design/icons-vue'
import type { TableColumnsType, TablePaginationConfig } from 'ant-design-vue'
import CreateLeadForm from './cpns/CreateLeadForm.vue'

// 定义数据类型
interface LeadData {
  key: string
  sequence: number
  year: string
  responsible: string
  name: string
  amount: number
  status: string
  closeReason: string
  auditStatus: string
  currentApprover: string
}

// 状态变量
const activeTabKey = ref<string>('current')
const searchValue = ref<string>('')
const sceneValue = ref<string>('current')
const statusValue = ref<string>('normal')
const loading = ref<boolean>(false)
const tableData = ref<LeadData[]>([])

// 表格分页配置
const pagination = reactive<TablePaginationConfig>({
  current: 1,
  pageSize: 10,
  total: 0,
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total: any) => `共 ${total} 条`,
})

// 表格列定义
const columns: TableColumnsType = [
  {
    title: '序号',
    dataIndex: 'sequence',
    key: 'sequence',
    width: 80,
    sorter: (a, b) => a.sequence - b.sequence,
  },
  {
    title: '年份',
    dataIndex: 'year',
    key: 'year',
    width: 100,
    sorter: (a, b) => a.year.localeCompare(b.year),
  },
  {
    title: '负责人',
    dataIndex: 'responsible',
    key: 'responsible',
    width: 120,
    sorter: (a, b) => a.responsible.localeCompare(b.responsible),
  },
  {
    title: '线索名称',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: '金额(元)',
    dataIndex: 'amount',
    key: 'amount',
    width: 120,
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: '线索状态',
    dataIndex: 'status',
    key: 'status',
    width: 120,
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
  {
    title: '关闭原因',
    dataIndex: 'closeReason',
    key: 'closeReason',
    width: 150,
  },
  {
    title: '审核状态',
    dataIndex: 'auditStatus',
    key: 'auditStatus',
    width: 120,
    sorter: (a, b) => a.auditStatus.localeCompare(b.auditStatus),
  },
  {
    title: '当前审批人',
    dataIndex: 'currentApprover',
    key: 'currentApprover',
    width: 120,
  },
]

// 表格行选择配置
const rowSelection = {
  onChange: (selectedRowKeys: string[], selectedRows: LeadData[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    )
  },
}

// 事件处理函数
const handleTabChange = (key: string) => {
  console.log('Tab切换到:', key)
  fetchTableData()
}

const onSearch = (value: string) => {
  console.log('搜索:', value)
  fetchTableData()
}

const handleSceneChange = (value: string) => {
  console.log('场景切换:', value)
  fetchTableData()
}

const handleStatusChange = (value: string) => {
  console.log('状态切换:', value)
  fetchTableData()
}

const handleAddNew = () => {
  console.log('新建线索')
  // 实现新建线索的逻辑
}

const handleCheckDuplicate = () => {
  console.log('查重')
  // 实现查重的逻辑
}

const handleTableChange = (
  pag: { pageSize: number; current: number },
  filters: any,
  sorter: any,
) => {
  pagination.current = pag.current || 1
  pagination.pageSize = pag.pageSize || 15

  console.log('表格变更:', pag, filters, sorter)
  fetchTableData()
}

// 获取表格数据
const fetchTableData = async () => {
  loading.value = true
  try {
    // 模拟API请求
    await new Promise(resolve => setTimeout(resolve, 500))

    // 这里是模拟数据，实际项目中应该从API获取
    const mockData: LeadData[] = []

    // 根据选择的tab来决定是否返回数据
    if (activeTabKey.value !== 'empty') {
      for (let i = 1; i <= 15; i++) {
        mockData.push({
          key: `${i}`,
          sequence: i,
          year: `202${Math.floor(Math.random() * 5)}`,
          responsible: `负责人${i}`,
          name: `客户线索${i}`,
          amount: Math.floor(Math.random() * 1000000),
          status: ['跟进中', '已完成', '已关闭'][Math.floor(Math.random() * 3)],
          closeReason: Math.random() > 0.5 ? '客户取消' : '',
          auditStatus: ['待审核', '已审核', '审核拒绝'][
            Math.floor(Math.random() * 3)
          ],
          currentApprover: `审批人${Math.floor(Math.random() * 5) + 1}`,
        })
      }
    }

    tableData.value = mockData
    pagination.total = mockData.length > 0 ? 100 : 0 // 模拟总数
  } catch (error) {
    console.error('获取数据失败:', error)
  } finally {
    loading.value = false
  }
}

// 初始化
onMounted(() => {
  fetchTableData()
})

const handleLeadCreated = () => {
  fetchTableData()
}
</script>

<style scoped>
.lead-tracking-container {
  padding: 20px;
  background-color: #f5f5f5;
}

.tab-container {
  background-color: #fff;
  padding: 0 16px;
  border-bottom: 1px solid #f0f0f0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
}

.title h1 {
  font-size: 20px;
  margin: 0;
}

.search-container {
  display: flex;
  gap: 10px;
}

.action-button {
  margin-left: 20px;
}

.advanced-search {
  display: flex;
  padding: 12px 16px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.search-item {
  display: flex;
  align-items: center;
  margin-right: 24px;
}

.label {
  margin-right: 8px;
}

.table-container {
  background-color: #fff;
  margin-top: 8px;
  padding: 16px;
}

/* 修改表头背景颜色 */
.table-container :deep(.ant-table-thead > tr > th) {
  background-color: #f0f0f0 !important; /* 浅蓝色背景 */
  color: #333 !important; /* 蓝色文字 */
}

/* 如果需要修改鼠标悬停时的颜色 */
.table-container :deep(.ant-table-thead > tr > th:hover) {
  background-color: #e6f4ff !important;
}

.empty-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0;
}

.empty-text {
  color: #999;
  font-size: 14px;
  margin-bottom: 16px;
}

.l-20 {
  margin-left: 20px;
}
.r-20 {
  margin-right: 20px;
}
</style>
