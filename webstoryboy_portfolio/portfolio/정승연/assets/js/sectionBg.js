class Stage {
    constructor() {
        this.renderParam = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.cameraParam = {
            fov: 70,
            lookAt: new THREE.Vector3(0, 0, 0)
        };

        this.fogParam = {
            color: 0x000000,
            start: 50,
            end: 2000
        };

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.geometry = null;
        this.material = null;
        this.mesh = null;
        this.isInitialized = false;
    }

    init() {
        this._setScene();
        this._setRender();
        this._setCamera();
        this._setFog();

        this.isInitialized = true;
    }

    _setScene() {
        this.scene = new THREE.Scene();
    }

    _setRender() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("webgl-canvas"),
            alpha: true
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.renderParam.width, this.renderParam.height);
    }

    _setCamera() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (!this.isInitialized) {
            this.camera = new THREE.PerspectiveCamera(
                this.cameraParam.fov,
                this.renderParam.width / this.renderParam.height
            );
            this.camera.lookAt(this.cameraParam.lookAt);
        }

        this.camera.aspect = windowWidth / windowHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(windowWidth, windowHeight);
    }

    _setFog() {
        this.scene.fog = new THREE.Fog(
            this.fogParam.fov,
            this.fogParam.start,
            this.fogParam.end
        );
    }

    _render() {
        let rot = 0;
        const radian = (rot * Math.PI) / 180;

        rot += 0.1;
        this.camera.position.x = 1000 * Math.sin(radian);
        this.camera.position.z = 1000 * Math.cos(radian);
        this.renderer.render(this.scene, this.camera);
    }

    onResize() {
        this._setCamera();
    }

    onRaf() {
        this._render();
    }
}

class Mesh {
    constructor(stage) {
        this.stage = stage;
        this.mesh = null;
    }

    init() {
        this._setMesh();
    }

    _setMesh() {
        const vertices = [];
        const SIZE = 3000;
        const LENGTH = 3000;
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.PointsMaterial({
            color: 0x000000
        });

        for (let i = 0; i < LENGTH; i++) {
            const x = SIZE * (Math.random() - 0.5);
            const y = SIZE * (Math.random() - 0.5);
            const z = SIZE * (Math.random() - 0.5);

            vertices.push(x, y, z);
        }

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );

        this.mesh = new THREE.Points(geometry, material);
        this.stage.scene.add(this.mesh);
    }

    _render() {
        this.mesh.rotation.y += 0.001;
    }

    onRaf() {
        this._render();
    }
}

(() => {
    const stage = new Stage();
    const mesh = new Mesh(stage);

    stage.init();
    mesh.init();

    window.addEventListener("resize", () => {
        stage.onResize();
    });

    const _raf = () => {
        window.requestAnimationFrame(() => {
            stage.onRaf();
            mesh.onRaf();

            _raf();
        });
    };

    _raf();
})();