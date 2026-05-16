import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { FloatingElements } from './FloatingElements';
import styles from './HeroVisual.module.scss';

export function HeroVisual() {
  return (
    <motion.div
      className={styles.visual}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        className={styles.canvas}
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, 10]} intensity={0.4} color={0xA11212} />
        
        <FloatingElements />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>

      {/* Glassmorphism cards overlay */}
      <motion.div
        className={styles.glassCard}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className={styles.cardHeader}>SYSTEM STATUS</div>
        <div className={styles.cardBody}>
          <div className={styles.statusIndicator} />
          <div>ONLINE</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
