<template>
    <div>
        <div class="welcome-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Welcome" class="welcome-img" />
            <h1>ยินดีต้อนรับสมาชิกใหม่!</h1>
            <p>ขอบคุณที่เข้าร่วมกับเรา<br />เราหวังว่าคุณจะมีประสบการณ์ที่ดี</p>
            <button class="get-started-btn">เริ่มต้นใช้งาน</button>
        </div>
    </div>
</template>

<script>
// No script logic needed for this simple welcome page
</script>

<style scoped>
.welcome-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
}

.welcome-card {
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
    padding: 40px 32px;
    text-align: center;
    max-width: 350px;
    width: 100%;
    animation: fadeIn 1s;
}

.welcome-img {
    width: 80px;
    margin-bottom: 24px;
}

h1 {
    font-size: 2rem;
    color: #5f2eea;
    margin-bottom: 12px;
}

p {
    color: #555;
    margin-bottom: 28px;
    font-size: 1.1rem;
}

.get-started-btn {
    background: linear-gradient(90deg, #5f2eea 0%, #8ec5fc 100%);
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 12px 32px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
}

.get-started-btn:hover {
    background: linear-gradient(90deg, #8ec5fc 0%, #5f2eea 100%);
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(40px);}
    to { opacity: 1; transform: translateY(0);}
}
</style>