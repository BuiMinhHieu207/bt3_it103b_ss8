// 1. Khởi tạo các mảng đồng bộ dữ liệu
const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
let portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
const portPowersKw = [250, 150, 60, 250, 60, 150];

// 2. Cập nhật trạng thái thông qua indexOf()
// Xe cắm sạc vào trụ S01 -> CHARGING
let indexS01 = portIds.indexOf('S01');
if (indexS01 !== -1) {
    portStatuses[indexS01] = 'CHARGING';
}

// Trụ S03 sửa xong -> AVAILABLE
let indexS03 = portIds.indexOf('S03');
if (indexS03 !== -1) {
    portStatuses[indexS03] = 'AVAILABLE';
}

// 3. Thống kê số lượng trụ AVAILABLE và tìm trụ có công suất lớn nhất
let availableCount = 0;
let maxAvailablePower = 0;
let bestPortId = '';

for (let i = 0; i < portIds.length; i++) {
    // Chỉ xét các trụ đang ở trạng thái AVAILABLE
    if (portStatuses[i] === 'AVAILABLE') {
        availableCount++;
        
        // Tìm công suất lớn nhất
        if (portPowersKw[i] > maxAvailablePower) {
            maxAvailablePower = portPowersKw[i];
            bestPortId = portIds[i];
        }
    }
}

// 4. Xuất báo cáo trạng thái ra Console
console.log("=== BÁO CÁO TÌNH TRẠNG TRẠM SẠC VINFAST ===");
console.log(`- Trạng thái sau cập nhật:`);
console.log(`  + Trụ S01: ${portStatuses[indexS01]}`);
console.log(`  + Trụ S03: ${portStatuses[indexS03]}`);
console.log(`- Tổng số trụ sẵn sàng (AVAILABLE): ${availableCount}`);

if (availableCount > 0) {
    console.log(`- Trụ sẵn sàng có công suất lớn nhất: ${bestPortId} với ${maxAvailablePower} kW`);
} else {
    console.log(`- Hiện tại không có trụ nào sẵn sàng.`);
}
console.log("===========================================");
