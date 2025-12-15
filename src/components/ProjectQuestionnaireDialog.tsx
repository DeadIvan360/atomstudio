import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ArrowRight, ArrowLeft } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface ProjectQuestionnaireDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "34612345678";

const ProjectQuestionnaireDialog = ({ isOpen, onClose }: ProjectQuestionnaireDialogProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const projectTypes = [
    "Sitio Web Corporativo",
    "E-commerce / Tienda Online",
    "Landing Page",
    "Aplicación Web",
    "Rediseño de Sitio Existente",
    "Otro"
  ];

  const budgetRanges = [
    "Menos de $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "Más de $10,000"
  ];

  const timelines = [
    "Lo antes posible",
    "1-2 semanas",
    "1 mes",
    "2-3 meses",
    "Sin prisa"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const message = `
*Nuevo Proyecto*
━━━━━━━━━━━━━━
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Empresa:* ${formData.company || "No especificada"}
*Tipo de proyecto:* ${formData.projectType}
*Presupuesto:* ${formData.budget}
*Tiempo estimado:* ${formData.timeline}
*Descripción:* ${formData.description}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
    onClose();
    setStep(1);
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: ""
    });
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.projectType;
      case 3:
        return formData.budget && formData.timeline;
      case 4:
        return formData.description;
      default:
        return false;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Dialog */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-xl font-bold text-foreground">Empezar Proyecto</h2>
                <p className="text-sm text-muted-foreground">Paso {step} de 4</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-muted">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="p-6 min-h-[300px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">Información de contacto</h3>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nombre *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Empresa (opcional)</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">¿Qué tipo de proyecto necesitas?</h3>
                    <div className="grid gap-3">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => handleInputChange("projectType", type)}
                          className={`p-4 text-left rounded-lg border transition-all ${
                            formData.projectType === type
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Presupuesto estimado</h3>
                      <div className="grid gap-2">
                        {budgetRanges.map((range) => (
                          <button
                            key={range}
                            onClick={() => handleInputChange("budget", range)}
                            className={`p-3 text-left rounded-lg border transition-all ${
                              formData.budget === range
                                ? "border-primary bg-primary/10 text-foreground"
                                : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">¿Para cuándo lo necesitas?</h3>
                      <div className="grid gap-2">
                        {timelines.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleInputChange("timeline", time)}
                            className={`p-3 text-left rounded-lg border transition-all ${
                              formData.timeline === time
                                ? "border-primary bg-primary/10 text-foreground"
                                : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">Cuéntanos sobre tu proyecto</h3>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground min-h-[180px] resize-none"
                      placeholder="Describe tu proyecto, objetivos, funcionalidades que necesitas, inspiración, etc."
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-border">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  step === 1
                    ? "text-muted-foreground cursor-not-allowed"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Anterior
              </button>

              {step < 4 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    canProceed()
                      ? "bg-primary text-primary-foreground hover:scale-105"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    canProceed()
                      ? "bg-[#25D366] text-white hover:scale-105"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Enviar por WhatsApp
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectQuestionnaireDialog;
