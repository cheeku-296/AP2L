import os
import re

src_dir = "/home/arpit.gupta@apmosys.mahape/Videos/Internal/Netraa X Cliqtest X Apmosys X Shieldvue X Ap2l/ap2l/AP2L/src/components/products-hero"

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file == "Hero.tsx":
            path = os.path.join(root, file)
            with open(path, "r") as f:
                content = f.read()
            
            new_content = content
            # Uncomment the left-to-right gradient
            new_content = new_content.replace(
                '{/* <div className="absolute inset-0 bg-gradient-to-r pointer-events-none transition-colors duration-500 from-slate-900/95 via-slate-900/80 to-slate-900/30" /> */}',
                '<div className="absolute inset-0 bg-gradient-to-r pointer-events-none transition-colors duration-500 from-slate-900/95 via-slate-900/80 to-slate-900/30" />'
            )
            # Uncomment the bottom-to-top gradient
            new_content = new_content.replace(
                '{/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none transition-colors duration-500 from-slate-900 to-transparent" /> */}',
                '<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none transition-colors duration-500 from-slate-900 to-transparent" />'
            )
            
            if new_content != content:
                with open(path, "w") as f:
                    f.write(new_content)
                print(f"Uncommented gradients in {path}")
