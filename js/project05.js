const canvas = document.getElementById("drawingCanvas");
        const ctx = canvas.getContext("2d");
        const brushSize = document.getElementById("brushSize");
        const brushColor = document.getElementById("brushColor");
        const bgColor = document.getElementById("bgColor");
        const undoButton = document.getElementById("undo");
        const clearButton = document.getElementById("clear");
        const saveButton = document.getElementById("save");
        
        let drawing = false;
        let strokes = [];
        let currentStroke = [];
        
        ctx.fillStyle = bgColor.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        canvas.addEventListener("mousedown", () => {
            drawing = true;
            currentStroke = [];
        });

        canvas.addEventListener("mousemove", (e) => {
            if (!drawing) return;
            const x = e.offsetX;
            const y = e.offsetY;
            ctx.lineWidth = brushSize.value;
            ctx.strokeStyle = brushColor.value;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            
            ctx.beginPath();
            if (currentStroke.length > 0) {
                ctx.moveTo(currentStroke[currentStroke.length - 1].x, currentStroke[currentStroke.length - 1].y);
            } else {
                ctx.moveTo(x, y);
            }
            ctx.lineTo(x, y);
            ctx.stroke();
            currentStroke.push({ x, y, color: brushColor.value, size: brushSize.value });
        });
        
        canvas.addEventListener("mouseup", () => {
            drawing = false;
            if (currentStroke.length > 0) {
                strokes.push([...currentStroke]);
            }
        });
        
        undoButton.addEventListener("click", () => {
            if (strokes.length === 0) return;
            strokes.pop();
            ctx.fillStyle = bgColor.value;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            strokes.forEach(stroke => {
                stroke.forEach((point, index) => {
                    ctx.lineWidth = point.size;
                    ctx.strokeStyle = point.color;
                    ctx.beginPath();
                    if (index > 0) {
                        ctx.moveTo(stroke[index - 1].x, stroke[index - 1].y);
                    } else {
                        ctx.moveTo(point.x, point.y);
                    }
                    ctx.lineTo(point.x, point.y);
                    ctx.stroke();
                });
            });
        });
        
        clearButton.addEventListener("click", () => {
            ctx.fillStyle = bgColor.value;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            strokes = [];
        });
        
        saveButton.addEventListener("click", () => {
            const link = document.createElement("a");
            link.download = "drawing.png";
            link.href = canvas.toDataURL();
            link.click();
        });
        
        bgColor.addEventListener("input", () => {
            ctx.fillStyle = bgColor.value;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            strokes.forEach(stroke => {
                stroke.forEach((point, index) => {
                    ctx.lineWidth = point.size;
                    ctx.strokeStyle = point.color;
                    ctx.beginPath();
                    if (index > 0) {
                        ctx.moveTo(stroke[index - 1].x, stroke[index - 1].y);
                    } else {
                        ctx.moveTo(point.x, point.y);
                    }
                    ctx.lineTo(point.x, point.y);
                    ctx.stroke();
                });
            });
        });