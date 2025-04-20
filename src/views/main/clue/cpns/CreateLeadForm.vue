<template>
  <div>
    <!-- 新建线索按钮 -->
    <a-button type="primary" @click="showModal">
      <plus-outlined />
      新建线索
    </a-button>

    <!-- 新建线索模态框 -->
    <a-modal
      v-model:visible="visible"
      title="新建线索"
      :width="1400"
      :footer="null"
      @cancel="handleCancel"
    >
      <a-form
        style="padding: 20px"
        :model="formState"
        :rules="rules"
        ref="formRef"
        :label-col="{ span: 0 }"
        :wrapper-col="{ span: 24 }"
      >
        <!-- 步骤标题 -->
        <div class="step-header">
          <div class="step-title">
            <div class="step-number">1</div>
            <div class="step-name">基本信息</div>
          </div>
          <div class="step-line"></div>
        </div>

        <!-- 线索描述部分 -->
        <div class="section-title">线索描述</div>

        <div class="form-row">
          <a-form-item name="year" class="form-item">
            <template #label>
              <span class="required-label">年份</span>
            </template>
            <a-select v-model:value="formState.year" placeholder="请选择">
              <a-select-option value="2024">2024</a-select-option>
              <a-select-option value="2023">2023</a-select-option>
              <a-select-option value="2022">2022</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item name="source" class="form-item">
            <template #label>
              <span class="required-label">线索来源</span>
            </template>
            <a-select v-model:value="formState.source" placeholder="请选择">
              <a-select-option value="高层对接">高层对接</a-select-option>
              <a-select-option value="客户介绍">客户介绍</a-select-option>
              <a-select-option value="市场活动">市场活动</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item name="businessCategory" class="form-item">
            <template #label>
              <span class="required-label">业务类别</span>
            </template>
            <a-select
              v-model:value="formState.businessCategory"
              placeholder="请选择"
            >
              <a-select-option value="软件开发">软件开发</a-select-option>
              <a-select-option value="咨询服务">咨询服务</a-select-option>
              <a-select-option value="系统集成">系统集成</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item name="status" class="form-item">
            <template #label>
              <span class="required-label">线索状态</span>
            </template>
            <a-select v-model:value="formState.status" placeholder="请选择">
              <a-select-option value="正常">正常</a-select-option>
              <a-select-option value="关闭">关闭</a-select-option>
              <a-select-option value="转化">转化</a-select-option>
            </a-select>
          </a-form-item>
        </div>

        <a-form-item name="name">
          <template #label>
            <span class="required-label"
              >线索名称（年份+客户简称+项目名称）</span
            >
          </template>
          <a-input
            v-model:value="formState.name"
            placeholder="请填写线索名称"
          />
        </a-form-item>

        <div class="form-row">
          <a-form-item name="businessDirection" class="form-item">
            <template #label>
              <span class="required-label">业务方向</span>
            </template>
            <a-select
              v-model:value="formState.businessDirection"
              placeholder="请选择"
            >
              <a-select-option value="信息化">信息化</a-select-option>
              <a-select-option value="数字化">数字化</a-select-option>
              <a-select-option value="智能化">智能化</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item name="projectType" class="form-item">
            <template #label>
              <span class="required-label">项目类型</span>
            </template>
            <a-select
              v-model:value="formState.projectType"
              placeholder="请选择"
            >
              <a-select-option value="软件项目">软件项目</a-select-option>
              <a-select-option value="硬件项目">硬件项目</a-select-option>
              <a-select-option value="混合项目">混合项目</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item name="currentStage" class="form-item">
            <template #label>
              <span class="required-label">当前阶段</span>
            </template>
            <a-select
              v-model:value="formState.currentStage"
              placeholder="请选择"
            >
              <a-select-option value="可行性研究">可行性研究</a-select-option>
              <a-select-option value="需求分析">需求分析</a-select-option>
              <a-select-option value="方案制定">方案制定</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item name="fundingStatus" class="form-item">
            <template #label>
              <span class="required-label">资金到位情况</span>
            </template>
            <a-select
              v-model:value="formState.fundingStatus"
              placeholder="请选择"
            >
              <a-select-option value="未到位">未到位</a-select-option>
              <a-select-option value="部分到位">部分到位</a-select-option>
              <a-select-option value="已到位">已到位</a-select-option>
            </a-select>
          </a-form-item>
        </div>

        <div class="form-row">
          <a-form-item name="winRate" class="form-item">
            <template #label>
              <span class="required-label">赢单率</span>
            </template>
            <a-select v-model:value="formState.winRate" placeholder="请选择">
              <a-select-option value="低">低</a-select-option>
              <a-select-option value="中">中</a-select-option>
              <a-select-option value="高">高</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item name="amount" class="form-item">
            <template #label>
              <span class="required-label">金额（元）</span>
            </template>
            <a-input-number
              v-model:value="formState.amount"
              style="width: 100%"
              placeholder="0"
              :min="0"
            />
          </a-form-item>
        </div>

        <a-form-item name="description">
          <template #label>
            <span class="required-label">项目描述</span>
          </template>
          <a-textarea
            v-model:value="formState.description"
            :rows="4"
            placeholder="请填写项目描述"
          />
        </a-form-item>

        <!-- 客户信息部分 -->
        <div class="step-header" style="margin-top: 30px">
          <div class="step-title">
            <div class="step-number">2</div>
            <div class="step-name">客户信息</div>
          </div>
          <div class="step-line"></div>
        </div>

        <div class="form-row">
          <a-form-item name="customerName" class="form-item">
            <template #label>
              <span class="required-label">客户名称（营业执照名称）</span>
            </template>
            <a-input
              v-model:value="formState.customerName"
              placeholder="+添加"
            />
          </a-form-item>

          <a-form-item name="customerContact" class="form-item">
            <template #label>
              <span class="required-label">客户联系人</span>
            </template>
            <a-input
              v-model:value="formState.customerContact"
              placeholder="+添加"
            />
          </a-form-item>
        </div>

        <div class="form-row">
          <a-form-item name="customerPhone" class="form-item">
            <template #label>
              <span class="required-label">客户联系人电话</span>
            </template>
            <a-input v-model:value="formState.customerPhone" placeholder="" />
          </a-form-item>

          <a-form-item name="customerIndustry" class="form-item">
            <template #label>
              <span class="required-label">客户行业</span>
            </template>
            <a-select
              v-model:value="formState.customerIndustry"
              placeholder="请选择"
            >
              <a-select-option value="互联网">互联网</a-select-option>
              <a-select-option value="金融">金融</a-select-option>
              <a-select-option value="制造业">制造业</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item name="decisionMaker" class="form-item">
            <template #label>
              <span class="required-label">决策人（航天世景-李XX）</span>
            </template>
            <a-input v-model:value="formState.decisionMaker" placeholder="" />
          </a-form-item>

          <a-form-item name="contactPerson" class="form-item">
            <template #label>
              <span class="required-label">对接人（航天世景-李XX）</span>
            </template>
            <a-input v-model:value="formState.contactPerson" placeholder="" />
          </a-form-item>
        </div>

        <!-- 其它补充部分 -->
        <div class="step-header" style="margin-top: 30px">
          <div class="step-title">
            <div class="step-number">3</div>
            <div class="step-name">其它补充</div>
          </div>
          <div class="step-line"></div>
        </div>

        <div class="form-row">
          <a-form-item name="designUnit" class="form-item">
            <template #label>
              <span>设计单位（营业执照名称）</span>
            </template>
            <a-input v-model:value="formState.designUnit" placeholder="" />
          </a-form-item>

          <a-form-item name="designUnitResponsible" class="form-item">
            <template #label>
              <span>设计单位负责人</span>
            </template>
            <a-input
              v-model:value="formState.designUnitResponsible"
              placeholder=""
            />
          </a-form-item>

          <a-form-item name="cooperationPartner" class="form-item">
            <template #label>
              <span>合作伙伴</span>
            </template>
            <a-input
              v-model:value="formState.cooperationPartner"
              placeholder=""
            />
          </a-form-item>

          <a-form-item name="competitor" class="form-item">
            <template #label>
              <span>潜在竞争对手</span>
            </template>
            <a-input v-model:value="formState.competitor" placeholder="" />
          </a-form-item>
        </div>

        <div class="form-row">
          <a-form-item name="involvedProducts" class="form-item-half">
            <template #label>
              <span>涉及的公司产品</span>
            </template>
            <a-input
              v-model:value="formState.involvedProducts"
              placeholder=""
            />
          </a-form-item>

          <a-form-item name="otherInfo" class="form-item-half">
            <template #label>
              <span>其它说明</span>
            </template>
            <a-input v-model:value="formState.otherInfo" placeholder="" />
          </a-form-item>
        </div>

        <div class="form-row">
          <a-form-item name="customerNeeds" class="form-item-half">
            <template #label>
              <span>客户痛点和需求</span>
            </template>
            <a-textarea
              v-model:value="formState.customerNeeds"
              :rows="3"
              placeholder=""
            />
          </a-form-item>

          <a-form-item name="companySupport" class="form-item-half">
            <template #label>
              <span>需公司提供的支持</span>
            </template>
            <a-textarea
              v-model:value="formState.companySupport"
              :rows="3"
              placeholder=""
            />
          </a-form-item>
        </div>

        <a-form-item name="remarks">
          <template #label>
            <span>备注</span>
          </template>
          <a-textarea
            v-model:value="formState.remarks"
            :rows="3"
            placeholder=""
          />
        </a-form-item>

        <!-- 申核信息部分 -->
        <div class="step-header" style="margin-top: 30px">
          <div class="step-title">
            <div class="step-number blue-bg">
              <check-outlined />
            </div>
            <div class="step-name">申核信息</div>
          </div>
          <div class="step-line"></div>
        </div>

        <div class="applicant-info">
          <div class="applicant-radio">
            <a-radio checked>申批人</a-radio>
          </div>
          <div class="applicant-card">
            <div class="applicant-avatar">
              <a-avatar src="" :size="64">
                <template #icon><user-outlined /></template>
              </a-avatar>
            </div>
            <div class="applicant-details">
              <div class="applicant-name">杨磊</div>
              <div class="applicant-role">第一级</div>
            </div>
          </div>
        </div>

        <!-- 按钮组 -->
        <div class="form-actions">
          <a-button @click="handleCancel">取消</a-button>
          <a-button type="primary" @click="handleSubmit">提交审核</a-button>
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import {
  PlusOutlined,
  CheckOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import type { FormInstance } from 'ant-design-vue'

// 表单状态
const formState = reactive({
  year: '2024',
  source: '高层对接',
  businessCategory: '',
  status: '正常',
  name: '',
  businessDirection: '',
  projectType: '软件项目',
  currentStage: '可行性研究',
  fundingStatus: '未到位',
  winRate: '',
  amount: 0,
  description: '',
  customerName: '',
  customerContact: '',
  customerPhone: '',
  customerIndustry: '',
  decisionMaker: '',
  contactPerson: '',
  // 其它补充字段
  designUnit: '',
  designUnitResponsible: '',
  cooperationPartner: '',
  competitor: '',
  involvedProducts: '',
  otherInfo: '',
  customerNeeds: '',
  companySupport: '',
  remarks: '',
})

// 表单验证规则
const rules = {
  name: [{ required: true, message: '请填写线索名称', trigger: 'blur' }],
  customerName: [
    { required: true, message: '请填写客户名称', trigger: 'blur' },
  ],
  customerContact: [
    { required: true, message: '请填写客户联系人', trigger: 'blur' },
  ],
  customerPhone: [
    { required: true, message: '请填写客户联系人电话', trigger: 'blur' },
  ],
}

// 模态框可见性
const visible = ref<boolean>(false)
const formRef = ref<FormInstance>()

// 显示模态框
const showModal = () => {
  visible.value = true
}

// 处理取消
const handleCancel = () => {
  resetForm()
  visible.value = false
}

// 重置表单
const resetForm = () => {
  formRef.value?.resetFields()
}

// 提交表单
const handleSubmit = () => {
  formRef.value
    ?.validate()
    .then(() => {
      // 在这里处理表单提交逻辑
      console.log('表单数据:', formState)
      message.success('线索创建成功，已提交审核')
      visible.value = false
      resetForm()
    })
    .catch((error: any) => {
      console.log('验证失败:', error)
    })
}
</script>

<style scoped>
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}

.form-item {
  padding: 0 8px;
  width: 25%;
}

.form-item-half {
  padding: 0 8px;
  width: 50%;
}

/* 对于小屏幕设备的响应式调整 */
@media (max-width: 768px) {
  .form-item {
    width: 50%;
  }

  .form-item-half {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .form-item {
    width: 100%;
  }
}

.step-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.step-title {
  display: flex;
  align-items: center;
  margin-right: 10px;
  white-space: nowrap;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #1890ff;
  color: white;
  border-radius: 50%;
  margin-right: 8px;
  font-size: 14px;
}

.blue-bg {
  background-color: #1890ff;
}

.step-name {
  font-weight: bold;
  font-size: 16px;
}

.step-line {
  flex: 1;
  height: 1px;
  background-color: #e8e8e8;
}

.section-title {
  font-weight: 500;
  margin-bottom: 16px;
}

.required-label::before {
  content: '* ';
  color: #ff4d4f;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
}

.applicant-info {
  margin-bottom: 20px;
}

.applicant-radio {
  margin-bottom: 16px;
}

.applicant-card {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  width: fit-content;
}

.applicant-avatar {
  margin-right: 16px;
}

.applicant-details {
  display: flex;
  flex-direction: column;
}

.applicant-name {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 4px;
}

.applicant-role {
  color: #666;
  font-size: 14px;
}

/* 关闭按钮样式 */
:deep(.ant-modal-close) {
  color: rgba(0, 0, 0, 0.45);
}

:deep(.ant-modal-close:hover) {
  color: rgba(0, 0, 0, 0.75);
}
</style>
