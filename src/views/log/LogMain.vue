<script setup>
    import { onMounted, reactive, ref } from "vue";
    import { getServiceList } from "@/api/service/index.js";
    import { getLogList, getSeverityTextList } from "@/api/log/index.js";
    import { useRouter } from "vue-router";
    import { ElMessage } from "element-plus";
    
    const router = useRouter()
    const total = ref(0)
    const logList = ref([])
    const startAndStopTime = ref([])
    const logQueryDto = ref({
        pageNum: 1,
        pageSize: 10,
        serviceName: '',
        traceId: '',
        keyword: '',
        keywordNotIncluded: '',
        severityText: '',
        startTimestamp: 0,
        endTimestamp: 0
    })
    const baseQueryDto = reactive({
        query: '',
        namespace: '',
        pageNum: 1,
        pageSize: 10
    })
    
    const toggleLogList = async () => {
        const tmpLogQueryDto = logQueryDto.value
        if (tmpLogQueryDto.serviceName === 'null') {
            tmpLogQueryDto.serviceName = ''
        }
        if (tmpLogQueryDto.severityText === 'null') {
            tmpLogQueryDto.severityText = ''
        }
        // 文本时间转long型时间戳
        if (startAndStopTime.value.length === 2) {
            tmpLogQueryDto.startTimestamp = Date.parse(startAndStopTime.value[0])
            tmpLogQueryDto.endTimestamp = Date.parse(startAndStopTime.value[1])
        } else {
            // 没输入时间 置空字段
            tmpLogQueryDto.startTimestamp = null
            tmpLogQueryDto.endTimestamp = null
        }
        const data = await getLogList(tmpLogQueryDto)
        if (data === null) {
            return
        }
        total.value = parseInt(data.result.total)
        logList.value = data.result.data
    }
    
    const handleSizeChange = async (newSize) => {
        logQueryDto.value.pageSize = newSize
        await toggleLogList()
    }
    
    const handleCurrentChange = async (newPage) => {
        logQueryDto.value.pageNum = newPage
        await toggleLogList()
    }
    
    const queryServiceName = async (queryString, cb) => {
        baseQueryDto.query = queryString
        const data = await getServiceList(baseQueryDto)
        if (data === null) {
            cb([])
            return
        }
        // 组织成对象的list {value:"xx"}
        const results = data.result.data.map(item => {
            if (item.name) {
                return {
                    value: item.name
                }
            }
            // 这个位置在上行的时候要重新做处理的
            return {
                value: 'null'
            }
        })
        cb(results)
    }
    
    const querySeverityText = async (queryString, cb) => {
        const data = await getSeverityTextList(queryString)
        if (data === null) {
            cb([])
            return
        }
        // 组织成对象的list {value:"xx"}
        const results = data.result.map(item => {
            if (item) {
                return {
                    value: item
                }
            }
            // 这个位置在上行的时候要重新做处理的
            return {
                value: 'null'
            }
        })
        cb(results)
    }
    
    const // 时间戳：1637244864707
        /* 时间戳转换为时间 */
        timestampToTime = (timestamp) => {
            if (timestamp === '0') {
                return 'unknown'
            }
            // 将timestamp调节到13位 多删少补
            if (timestamp.length < 13) {
                timestamp = timestamp + '000'
            } else if (timestamp.length > 13) {
                timestamp = timestamp.substring(0, 13)
            }
            
            timestamp = Number(timestamp)
            
            let date = new Date(timestamp);
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
            let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            return Y + M + D + h + m + s;
        }
    
    onMounted(async () => {
        await toggleLogList()
    })
    
    const dialogVisible = ref(false)
    
    const tmpLog = ref({})
    
    const getLogDetail = (log) => {
        // 深拷贝
        const tmpLogCopy = JSON.parse(JSON.stringify(log))
        tmpLog.value = tmpLogCopy
        tmpLog.value.timestamp = timestampToTime(tmpLogCopy.timestamp)
        tmpLog.value.error = tmpLogCopy.error ? '异常' : '正常'
        tmpLog.value.tags = tmpLogCopy.tags.map(tag => tag.key + ':' + tag.value).join('\t');
        dialogVisible.value = true
    }
    
    const checkTraceForLog = async (log) => {
        if (!log.serviceName || !log.traceId) {
            ElMessage.warning("该日志未上报链路信息")
            return
        }
        await router.push(`/main/trace?serviceName=${log.serviceName}&traceId=${log.traceId}`)
    }
</script>

<template>
    <div class="log-main-container">
        <!-- 面包屑导航 -->
        <el-row>
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>
                    <a href="/main">主页</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/main/log">日志概览</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-card class="log-card">
            <!-- 搜索区 -->
            <div class="search-area">
                <el-form :inline="true" :model="logQueryDto" class="demo-form-inline">
                    <el-form-item label="服务名称">
                        <el-autocomplete
                            class="auto-complete-input"
                            v-model="logQueryDto.serviceName"
                            :fetch-suggestions="queryServiceName"
                            clearable
                            placeholder="请输入服务名称"
                        >
                        </el-autocomplete>
                    </el-form-item>
                    <el-form-item label="traceId">
                        <el-input v-model="logQueryDto.traceId"
                                  placeholder="请输入一个traceId" clearable/>
                    </el-form-item>
                    <el-form-item label="起止时间">
                        <el-date-picker
                            v-model="startAndStopTime"
                            type="datetimerange"
                            range-separator="到"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                        />
                    </el-form-item>
                    <el-form-item label="日志级别">
                        <el-autocomplete
                            class="auto-complete-input"
                            v-model="logQueryDto.severityText"
                            :fetch-suggestions="querySeverityText"
                            clearable
                            placeholder="请输入日志级别"
                        >
                        </el-autocomplete>
                    </el-form-item>
                    <el-form-item label="内容关键词">
                        <el-input v-model="logQueryDto.keyword"
                                  placeholder="请输入一个内容关键词" clearable/>
                    </el-form-item>
                    <el-form-item label="内容不包含的关键词">
                        <el-input v-model="logQueryDto.keywordNotIncluded"
                                  placeholder="请输入内容不包含的关键词" clearable/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="toggleLogList">搜索</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-divider/>
            <!-- 日志展示区 -->
            <el-row :gutter="5" v-for="log in logList" :key="log">
                <el-col :span="3">{{ timestampToTime(log.timestamp) }}</el-col>
                <el-col :span="1">{{ log.severityText }}</el-col>
                <el-col :span="18">{{ log.content }}</el-col>
                <el-col :span="1">
                    <el-tooltip effect="light"
                                content="查看日志对应链路信息" placement="top"
                                :enterable="false">
                        <el-button type="primary" circle size="small"
                                   @click="checkTraceForLog(log)">
                            <el-icon>
                                <Share/>
                            </el-icon>
                        </el-button>
                    </el-tooltip>
                </el-col>
                <el-col :span="1">
                    <el-tooltip effect="light"
                                content="查看日志具体信息" placement="top"
                                :enterable="false">
                        <el-button type="primary" circle size="small"
                                   @click="getLogDetail(log)">
                            <el-icon>
                                <InfoFilled/>
                            </el-icon>
                        </el-button>
                    </el-tooltip>
                </el-col>
            </el-row>
            <!-- pagination -->
            <div class="pagination-div">
                <el-pagination
                    v-model:current-page="logQueryDto.pageNum"
                    v-model:page-size="logQueryDto.pageSize"
                    :page-sizes="[2, 5, 10, 20]"
                    layout="total, prev, pager, next, sizes"
                    :total="total"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                />
            </div>
        </el-card>
    </div>
    
    <!-- 弹窗 -->
    <el-dialog
        v-model="dialogVisible"
        title="Log"
        width="60%"
    >
        <el-form
            label-position="left"
            label-width="auto"
            :model="tmpLog"
            disabled
        >
            <el-form-item label="日志时间">
                <el-input v-model="tmpLog.timestamp"/>
            </el-form-item>
            <el-form-item label="日志级别">
                <el-input v-model="tmpLog.severityText"/>
            </el-form-item>
            <el-form-item label="日志内容">
                <el-input type="textarea" v-model="tmpLog.content"/>
            </el-form-item>
            <el-form-item label="服务名称">
                <el-input v-model="tmpLog.serviceName"/>
            </el-form-item>
            <el-form-item label="追踪Id">
                <el-input v-model="tmpLog.traceId"/>
            </el-form-item>
            <el-form-item label="SpanId">
                <el-input v-model="tmpLog.spanId"/>
            </el-form-item>
            <el-form-item label="状态">
                <el-input v-model="tmpLog.error"/>
            </el-form-item>
            <el-form-item label="Tags">
                <el-input type="textarea" v-model="tmpLog.tags"/>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<style scoped lang="less">
    .log-card {
        margin-top: 2%;
        
        .pagination-div {
            margin-top: 2%;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>