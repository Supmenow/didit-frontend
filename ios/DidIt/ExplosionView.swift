//
//  ExplosionView.swift
//  DidIt
//
//  Created by James Campbell on 8/5/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import UIKit

@objc class ExplosionView: UIView {
  
  let emmiterLayer = CAEmitterLayer()
  let cell = CAEmitterCell()
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    
    //cell.contents = UIImage(named: "smiley")?.CGImage
    cell.birthRate = 10
    cell.lifetime = 5.0
    
    cell.alphaSpeed = -0.4
    cell.velocity = 250
    
    cell.emissionRange = CGFloat(M_PI) * 2.0
    cell.spin = 0.5
    
    emmiterLayer.emitterCells = [cell]
  }

  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
}