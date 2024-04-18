import axios from '../index.js'
import { ElMessage } from "element-plus";

export const getEndPointAndTraceIdListByServiceName = async (endpointsQueryDto) => {
    try {
        const {data} = await axios.get('/trace/endPoints', {
            params: {
                serviceName: endpointsQueryDto.serviceName,
                pageNum: endpointsQueryDto.pageNum,
                pageSize: endpointsQueryDto.pageSize
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取traceId表失败, ${data.message}`)
            return null
        }
        ElMessage.error('获取traceId表失败')
        return null
    } catch (e) {
        ElMessage.error(`获取traceId表失败, ${e.message}`)
    }
    return null
}
